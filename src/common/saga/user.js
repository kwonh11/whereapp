import {
  getUser,
  uploadImgAPI,
  callApiAddPlace,
  callApiUpdateHeart,
  callApiGetHeart,
  callApiGetComment,
} from "../api";
import { actions, types } from "../reducer/user";
import { put, call, takeLatest } from "redux-saga/effects";

function* logIn() {
  try {
    const res = yield call(getUser);
    if (res.data) {
      const comments = yield call(callApiGetComment);
      const hearts = yield call(callApiGetHeart);
      const payload = {
        info: res.data,
        comments: comments.data,
        hearts: hearts.data,
      };
      yield put(actions.loginSuccess(payload));
    }
  } catch (error) {
    yield put(actions.loginError(error));
  }
}

function* uploadImage(action) {
  try {
    const res = yield call(uploadImgAPI, action.image);
    yield put(actions.uploadImageSuccess(res.data.url));
  } catch (error) {
    yield put(actions.uploadImageError(error));
  }
}

function* setHearts(action) {
  try {
    const newPlace = yield call(callApiAddPlace, action.payload);
    yield call(callApiUpdateHeart, newPlace.data);
    const newHeart = yield call(callApiGetHeart);
    yield put(actions.setHeartsSuccess(newHeart.data));
  } catch (error) {
    yield put(actions.setHeartsError(error));
  }
}

function* setComments() {
  try {
    const comments = yield call(callApiGetComment);
    yield put(actions.setCommentsSuccess(comments.data));
  } catch (error) {
    yield put(actions.setCommentsError(error));
  }
}

export default function* watcher() {
  yield takeLatest(types.LOGIN_REQUEST, logIn);
  yield takeLatest(types.UPLOAD_IMAGE_REQUEST, uploadImage);
  yield takeLatest(types.SET_HEARTS_REQUEST, setHearts);
  yield takeLatest(types.SET_COMMENTS_REQUEST, setComments);
}
