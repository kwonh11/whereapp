import { eventChannel, takeEvery } from "redux-saga/effects";
import io from "socket.io-client";
import axios from "axios";

let socket = null;

export function createSocketChannel() {
  return eventChannel((emit) => {
    function createSocket() {
      socket = io.connect("http://localhost:8000", {
        path: "/socket.io",
      });

      socket.on("chat", function (data) {
        const newChatList = [...chat, data];
        setChat(newChatList);
      });
    }
    createSocket();

    return () => {
      console.log("socket close");
    };
  });
}

export function* watchOnPings() {
  const socket = yield call(createWebSocketConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const payload = yield take(socketChannel);
    yield put({ type: INCOMING_PONG_PAYLOAD, payload });
    yield fork(pong, socket);
  }
}

export default function* watcher() {
  yield takeLatest(types.REQUEST_ADD_COMMENT, addComments);
  yield takeLatest(types.REQUEST_UPDATE_COMMENT, updateComment);
  yield takeLatest(types.REQUEST_DELETE_COMMENT, deleteComment);
  yield takeLatest(types.REQUEST_DETAILS, fetchAdditional);
  yield takeLatest(types.REQUEST_ADD_REPLY, addReply);
  yield takeLatest(types.REQUEST_DELETE_REPLY, deleteReply);
  yield takeLatest(types.REQUEST_LIKE, addLike);
}
