import { getUser, uploadImgAPI, getComments } from "../api";
import { actions, types } from "../reducer/user";
import { put, call, takeLatest } from "redux-saga/effects";

function* logIn() {
  try {
    const res = yield call(getUser);
    if (res.data) {
      console.log(res.data)

   yield put(actions.loginInSuccess(res.data));
      

    }
     
    
  } catch (error) {
    yield put(actions.loginInError(error));
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



export default function* watcher() {
  yield takeLatest(types.LOGIN_IN_REQUEST, logIn);
  yield takeLatest(types.UPLOAD_IMAGE_REQUEST, uploadImage);

}
