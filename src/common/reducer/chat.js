import createReducer from "../createReducer";

export const types = {
  SET_SOCKET_REQUEST: "chat/SET_SOCKET_REQUEST",
  SET_SOCKET_SUCCESS: "chat/SET_SOCKET_SUCCESS",
  SET_SOCKET_ERROR: "chat/SET_SOCKET_ERROR",

  SET_USER_REQUEST: "chat/SET_USER_REQUEST",
  SET_USER_SUCCESS: "chat/SET_USER_SUCCESS",
  SET_USER_ERROR: "chat/SET_USER_ERROR",
};

export const actions = {
  setUserRequest: (payload) => ({ type: types.SET_USER_REQUEST, payload }),
  setUserSuccess: (payload) => ({ type: types.SET_USER_SUCCESS, payload }),
  setUserError: (payload) => ({ type: types.SET_USER_ERROR, payload }),
};

const INITIAL_STATE = {
  chat: [],
  user: null,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_IN_SUCCESS]: (state, action) => {
    state.isLoggedIn = true;
    state.info = action.payload.info;
    state.comments = action.payload.comments;
    state.hearts = action.payload.hearts;
  },

  [types.UPLOAD_IMAGE_SUCCESS]: (state, action) => {
    state.info.image = action.image;
  },

  [types.SET_HEARTS_SUCCESS]: (state, action) => {
    state.hearts = action.payload;
  },
  [types.SET_HEARTS_ERROR]: (state, action) => {
    state.error = action.payload;
  },
});

export default reducer;
