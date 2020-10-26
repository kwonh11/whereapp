import createReducer from "../createReducer";

export const types = {
  ADD_MESSAGE: "chat/ADD_MESSAGE",
  SUBMIT_MESSAGE: "chat/SUBMIT_MESSAGE",
  JOIN_CHAT: "chat/JOIN_CHAT",
  SET_CONNECT_ERROR: "chat/SET_CONNECT_ERROR",
};

export const actions = {
  setConnectError: (payload) => ({ type: types.SET_CONNECT_ERROR, payload }),
  addMessage: (payload) => ({ type: types.ADD_MESSAGE, payload}),
  submitMessage: (payload) => ({type: types.SUBMIT_MESSAGE, payload}),
  joinChat: (nick) => ({type: types.JOIN_CHAT, nick})
};

const INITIAL_STATE = {
  chatList: [
    // userName: "",
    // userId: "",
    // message: "",
  ],
  error: null,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_CONNECT_ERROR]: (state, action) => {
    state.error = action.payload;
  },
  [types.ADD_MESSAGE]: (state, action) => {
    state.chatList.push(action.payload);
  }
});

export default reducer;
