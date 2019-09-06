const cutState = state => state.app;

export const getIsInitialized = state => cutState(state).isInitialized;

export const getUser = state => cutState(state).user;