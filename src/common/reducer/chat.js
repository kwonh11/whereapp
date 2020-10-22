import createReducer from "../createReducer";

export const types = {
  WRITE_CHAT_REQUEST: "chat/WRITE_CHAT_REQUEST",
  WRITE_CHAT_SUCCESS: "chat/WRITE_CHAT_SUCCESS",
  WRITE_CHAT_ERROR: "chat/WRITE_CHAT_ERROR",

  SUBMIT_CHAT_REQUEST: "chat/SUBMIT_CHAT_REQUEST",
  SUBMIT_CHAT_SUCCESS: "chat/SUBMIT_CHAT_SUCCESS",
  SUBMIT_CHAT_ERROR: "chat/SUBMIT_CHAT_ERROR",

  READ_CHAT_REQUEST: "chat/READ_CHAT_REQUEST",
  READ_CHAT_SUCCESS: "chat/READ_CHAT_SUCCESS",
  READ_CHAT_ERROR: "chat/READ_CHAT_ERROR",

  SET_CONNECT_REQUEST: "chat/SET_CONNECT_REQUEST",
  SET_CONNECT_SUCCESS: "chat/SET_CONNECT_SUCCESS",
  SET_CONNECT_ERROR: "chat/SET_CONNECT_ERROR",

  SET_DISCONNECT_REQUEST: "chat/SET_DISCONNECT_REQUEST",
  SET_DISCONNECT_SUCCESS: "chat/SET_DISCONNECT_SUCCESS",
  SET_DISCONNECT_ERROR: "chat/SET_DISCONNECT_ERROR",
};

export const actions = {
  setConnectRequest: () => ({ type: types.SET_CONNECT_REQUEST }),
  setConnectSuccess: (payload) => ({
    type: types.SET_CONNECT_SUCCESS,
    payload,
  }),
  setConnectError: (payload) => ({ type: types.SET_CONNECT_ERROR, payload }),

  submitChatRequest: (payload) => ({
    type: types.SUBMIT_CHAT_REQUEST,
    payload,
  }),
  submitChatSuccess: (payload) => ({
    type: types.SUBMIT_CHAT_SUCCESS,
    payload,
  }),
  submitChatError: (payload) => ({ type: types.SUBMIT_CHAT_ERROR, payload }),
};

const INITIAL_STATE = {
  chatList: [],
  user: null,
  error: null,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_CONNECT_SUCCESS]: (state, action) => {
    state.chatList = action.payload.chatList;
    state.user = action.payload.user;
  },
  [types.SET_CONNECT_ERROR]: (state, action) => {
    state.error = action.payload;
  },
  [types.SUBMIT_CHAT_SUCCESS]: (state, action) => {
    state.chatList = action.payload.chatList;
    state.user = action.payload.user;
  },
});

export default reducer;
