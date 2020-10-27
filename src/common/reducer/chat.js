import createReducer from "../createReducer";

export const types = {
  SUBMIT_CHAT_REQUEST: "chat/SUBMIT_CHAT_REQUEST",
  SUBMIT_CHAT_SUCCESS: "chat/SUBMIT_CHAT_SUCCESS",
  SUBMIT_CHAT_ERROR: "chat/SUBMIT_CHAT_ERROR",

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

  setDisconnectRequest: () => ({ type: types.SET_DISCONNECT_REQUEST }),
  setDisconnectSuccess: (payload) => ({
    type: types.SET_DISCONNECT_SUCCESS,
    payload,
  }),
  setDisconnectError: (payload) => ({
    type: types.SET_DISCONNECT_ERROR,
    payload,
  }),

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
  count: 0,
  error: null,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_CONNECT_SUCCESS]: (state, action) => {
    state.chatList = [...state.chatList, action.payload.chat];
    state.count = action.payload.count;
  },
  [types.SET_DISCONNECT_SUCCESS]: (state, action) => {
    state.chatList = [...state.chatList, action.payload.chat];
    state.count = action.payload.count;
  },
  [types.SET_CONNECT_ERROR]: (state, action) => {
    state.error = action.payload;
  },
  [types.SUBMIT_CHAT_SUCCESS]: (state, action) => {
    state.chatList = [...state.chatList, action.payload];
  },
});

export default reducer;
