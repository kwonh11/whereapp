import {
  fork,
  take,
  takeEvery,
  call,
  put,
  cancel,
  select,
} from "redux-saga/effects";
import { eventChannel, buffers } from "redux-saga";
import io from "socket.io-client";
import { actions, types } from "../reducer/chat";

let socket = null;
let user = null;

function connect() {
  socket = io.connect("https://whereapp.ga", {
    path: "/socket.io",
  });
}

function createSocketChannel(buffer) {
  return eventChannel((emit) => {
    socket.on("join", function (data) {
      emit(actions.setConnectSuccess(data));
    });
    socket.on("exit", function (data) {
      emit(actions.setDisconnectSuccess(data));
    });
    socket.on("chat", function (data) {
      emit(actions.submitChatSuccess(data));
    });
    return () => {
      socket.off("join", function (data) {
        emit(actions.setConnectSuccess(data));
      });
      socket.off("exit", function (data) {
        emit(actions.setDisconnectSuccess(data));
      });
      socket.off("chat", function (data) {
        emit(actions.submitChatSuccess(data));
      });
    };
  }, buffer || buffers.none());
}

function* read() {
  const channel = yield call(createSocketChannel, buffers.sliding(1));
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write() {
  while (true) {
    const { payload } = yield take(types.SUBMIT_CHAT_REQUEST);
    socket.emit("chat", { nick: user.nick, image: user.image, text: payload });
  }
}

function* handleIO() {
  yield fork(read);
  yield fork(write);
}

function* flow() {
  while (true) {
    yield take(types.SET_CONNECT_REQUEST);
    yield call(connect);
    user = yield select((state) => state.user.info);
    socket.emit("join", user.nick);
    const task = yield fork(handleIO);

    yield take(types.SET_DISCONNECT_REQUEST);
    yield cancel(task);
    socket.emit("exit", user.nick);
    socket.disconnect();
  }
}

export default function* watcher() {
  yield fork(flow);
}
