/* eslint-disable no-console */
import {
  put,
  take,
  takeEvery,
  call,
  fork,
  delay,
  race,
  all
} from "redux-saga/effects";
import {
  INITIALIZE,
  initialized,
  setUser,
  createNotification,
  setApprovedEntities,
  ADD_ENTITY,
  setSignedEntity,
  SIGN_ENTITY,
  CHANGE_BASE_URL
} from "./actions";
import { history } from "../../index";

function* fetchApprovedEntities(api) {
  // const data = [
  //   {
  //     name: "Netanel",
  //     pubkey: "0x000000000000sda0000feae0000",
  //     rank: 1,
  //     type: "friend",
  //     location: "Tel Aviv",
  //     shopId: null
  //   },
  //   {
  //     name: "Shani",
  //     pubkey: "0x00fada000000sda0000feae0000",
  //     rank: 1,
  //     type: "friend",
  //     location: "Tel Aviv",
  //     shopId: null
  //   },
  //   {
  //     name: "Niv",
  //     pubkey: "0x00efafe000000sda0000feae0000",
  //     rank: 2,
  //     type: "dealer",
  //     location: "London",
  //     shopId: "TGNiv"
  //   },
  //   {
  //     name: "Nadav",
  //     pubkey: "0x001234000000sda0000feae0000",
  //     rank: 4,
  //     type: "dealer",
  //     location: "Tel Aviv",
  //     shopId: "TGNadav"
  //   },
  //   {
  //     name: "Udi",
  //     pubkey: "0x0sd000000sda0000feae0000",
  //     rank: 3,
  //     type: "dealer",
  //     location: "Tel Aviv",
  //     shopId: "TGUdi"
  //   }
  // ];
  const { data } = yield call(api.get, "/entities");
  yield put(setApprovedEntities(data));
}

function* fetchData(api) {
  yield all([call(fetchApprovedEntities, api)]);
}

function* addEntity(api, { payload: { entity } }) {
  try {
    const { data } = yield call(api.post, "/add-entity", JSON.parse(entity));
    yield put(setApprovedEntities(data));
  } catch (e) {
    console.log(e);
  }
}

function* signEntity(api, { payload: { entity } }) {
  try {
    const { data } = yield call(api.post, "/sign-entity", JSON.parse(entity));
    yield put(setSignedEntity(data));
  } catch (e) {
    console.log(e);
  }
}

function* getUser(api) {
  try {
    const { data } = yield call(api.get, "/me");
    // const data = {
    //   name: "Yoni",
    //   pubkey: "0x00000000000000000000000feae0000",
    //   is_trusted: true,
    //   is_approved: true
    // };
    yield put(setUser(data));
  } catch (e) {
    console.log(e);
    console.log(e.error);
  }
}

function* initializeApp(api) {
  yield call(getUser, api);

  yield put(initialized(true));
  yield call(fetchData, api);
}

function* changeBaseUrl(api, { payload: baseUrl }) {
  api.baseUrl = baseUrl;
}
function* appSaga({ apiService }) {
  yield takeEvery(INITIALIZE, initializeApp, apiService);
  yield takeEvery(ADD_ENTITY, addEntity, apiService);
  yield takeEvery(SIGN_ENTITY, signEntity, apiService);
  yield takeEvery(CHANGE_BASE_URL, changeBaseUrl, apiService);
}

export default appSaga;
