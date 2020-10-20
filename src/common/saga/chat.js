import { fork, take, takeEvery, call, put } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import io from "socket.io-client";
import axios from "axios";
import { actions, types } from "../reducer/chat";
import { callApiGetChat, callApiPostChat } from "../api";

// function createSocketChannel(socket) {
//   console.log("--------subscribe");

//   return eventChannel((emit) => {
//     socket.on("chat", function (data) {
//       console.log("++++++++++++++ chat");
//       emit(data);
//     });

//     socket.on("disconnect", function (data) {
//       console.log("++++++++++++++ disconnect");
//     });

//     return () => {};
//   });
// }

function createSocketChannel(eventType) {
  console.log("--------createSocketChannel");
  console.log(eventType);
  const socket = io.connect("http://localhost:8000", {
    path: "/socket.io",
  });

  return eventChannel((emit) => {
    socket.on(eventType, function (data) {
      console.log(`++++++++++++++ ${eventType}`);
      // console.log(data);
      emit(data);
    });

    socket.on("disconnect", function (data) {
      console.log("++++++++++++++ disconnect");
    });

    return () => {};
  });
}

function connect() {
  const socket = io.connect("http://localhost:8000", {
    path: "/socket.io",
  });

  return socket;
}

function* flow() {
  console.log("--------최초임 제발");
  try {
    const channel = yield call(createSocketChannel, "join");

    const payload = yield take(channel);

    const res = yield call(callApiGetChat);

    const newChatList = [...res.data.chatList, payload];
    console.log({ chatList: newChatList, user: res.data.user });
    yield put(
      actions.setConnectSuccess({ chatList: newChatList, user: res.data.user })
    );
  } catch (error) {
    yield put(actions.setConnectError, error);
  }
}

function* submit(action) {
  console.log("-------submit");
  console.log(action.payload);
  try {
    let res = yield call(callApiGetChat);
    const channel = yield call(createSocketChannel, "chat");
    yield call(callApiPostChat, action.payload);

    const payload = yield take(channel);
    console.log("payload");

    console.log(payload);
    const newChatList = [...res.data.chatList, payload];
    console.log({ chatList: newChatList, user: res.data.user });
    yield put(
      actions.submitChatSuccess({ chatList: newChatList, user: res.data.user })
    );
  } catch (error) {
    yield put(actions.setConnectError, error);
  }
}

// function* flow() {
//   console.log("--------flow");
//   try {
//     const socket = yield call(connect);
//     const socketChannel = yield call(createSocketChannel, socket);
//     const res = yield call(callApiGetChat);

//     socket.emit("join");

//     const payload = yield take(socketChannel);
//     console.log(payload);

//     const newChatList = [...res.data.chatList, payload];

//     yield put(
//       actions.setConnectSuccess({ chatList: newChatList, user: res.data.user })
//     );

//     while(true){
//       const {message} = yield take(channel);
//       yield put({type: SUBMIT_CHAT_REQUEST, message});
//     }

//   } catch (error) {
//     yield put(actions.setConnectError, error);
//   }
// }

export default function* watcher() {
  yield takeEvery(types.SET_CONNECT_REQUEST, flow); //최초
  yield takeEvery(types.SUBMIT_CHAT_REQUEST, submit);
}
