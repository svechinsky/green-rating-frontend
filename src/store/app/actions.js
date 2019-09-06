export const INITIALIZE = "app/INITIALIZE";
export const INITIALIZED = "app/INITIALIZED";
export const SET_USER = "app/SET_USER";
export const SET_APPROVED_ENTITIES = "app/SET_APPROVED_ENTITIES";
export const SET_ERROR = "app/ERROR";
export const CREATE_NOTIFICATION = "app/CREATE_NOTIFICATION";
export const REMOVE_NOTIFICATION = "app/REMOVE_NOTIFICATION";
export const SIGN_ENTITY = "app/SIGN_ENTITY";
export const ADD_ENTITY = "app/ADD_ENTITY";
export const SET_SIGNED_ENTITY = "app/SET_SIGNED_ENTITY";
export const CHANGE_BASE_URL = "app/CHANGE_BASE_URL";

export const initialize = () => ({
  type: INITIALIZE,
  payload: {}
});

export const initialized = isInitialized => ({
  type: INITIALIZED,
  payload: {
    isInitialized
  }
});

export const setUser = user => ({
  type: SET_USER,
  payload: { user }
});

export const setApprovedEntities = entities => ({
  type: SET_APPROVED_ENTITIES,
  payload: { entities }
});

export const setError = error => ({
  type: SET_ERROR,
  payload: { error }
});

export const createNotification = (text, good) => ({
  type: CREATE_NOTIFICATION,
  payload: { text, good, open: true }
});

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATION
});

export const signEntity = entity => {
  console.log("ENN", entity)
  return {
    type: SIGN_ENTITY,
    payload: { entity }
  };
};

export const addEntity = entity => ({
  type: ADD_ENTITY,
  payload: { entity }
});

export const setSignedEntity = entity => {
  return {
    type: SET_SIGNED_ENTITY,
    payload: { entity }
  };
};

export const changeBaseUrl = baseUrl => {
  return {
    type: CHANGE_BASE_URL,
    payload: { baseUrl }
  };
};
