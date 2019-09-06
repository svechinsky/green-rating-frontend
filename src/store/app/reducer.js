import initialState from "../initialState";
import {
  INITIALIZED,
  SET_USER,
  CREATE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SET_APPROVED_ENTITIES,
  SET_SIGNED_ENTITY,
  SIGN_ENTITY,
  CHANGE_BASE_URL
} from "./actions";

export default function appReducer(
  state = initialState.app,
  { type, payload }
) {
  switch (type) {
    case CHANGE_BASE_URL:{
      return {
        ...state,
        baseUrl: payload.baseUrl
      };
    }
    case SET_SIGNED_ENTITY: {
      return {
        ...state,
        newSigned: payload.entity
      };
    }
    case SET_APPROVED_ENTITIES: {
      return {
        ...state,
        entities: payload.entities
      };
    }
    case CREATE_NOTIFICATION: {
      return {
        ...state,
        notification: payload
      };
    }
    case REMOVE_NOTIFICATION: {
      return {
        ...state,
        notification: { open: false }
      };
    }
    case SET_USER: {
      return {
        ...state,
        user: payload.user
          ? { ...payload.user, isOwner: payload.user.is_owner }
          : null
      };
    }
    case INITIALIZED: {
      return {
        ...state,
        isInitialized: payload.isInitialized
      };
    }
    default:
      return state;
  }
}
