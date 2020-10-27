import { buffers, eventChannel } from "redux-saga";
import {
  call,
  put,
  take,
  takeEvery,
  takeLatest,
  fork,
} from "redux-saga/effects";
import { actions, types } from "../reducer/chat";
import socket from "../mySocket";

const defaultMathcer = () => true;

export function createSocketChannel(eventType, buffer, matcher) {
  return eventChannel(
    (emit) => {
      const emitter = (message) => emit(message);
      socket.on(eventType, emitter);
      return function unsubscribe() {
        socket.off(eventType, emitter);
      };
    },
    buffer || buffers.none(),
    matcher || defaultMathcer
  );
}

export function closeChannel(channel) {
  if (channel) {
    channel.close();
  }
}

export function* onMessage(type) {
  const channel = yield call(createSocketChannel, type, buffers.sliding(1));
  while (true) {
    try {
      const message = yield take(channel);
      yield put(actions.addMessage(message));
    } catch (err) {
      put(actions.setConnectError(err));
    }
  }
}

export function* submitMessage(action) {
  const { nick, userId, message } = action.payload;
  try {
    yield socket.emit("chat", { nick, userId, message });
  } catch (err) {
    put(actions.setConnectError(err));
  }
}

export function* joinChat(action) {
  const nick = action.nick;
  try {
    yield socket.emit("join", { nick: nick });
  } catch (err) {
    put(actions.setConnectError(err));
  }
}

export default function* watcher() {
  yield fork(onMessage, "chat");
  yield takeLatest(types.SUBMIT_MESSAGE, submitMessage);
  yield takeLatest(types.JOIN_CHAT, joinChat);
}
