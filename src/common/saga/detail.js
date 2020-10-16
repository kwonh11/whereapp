import {
  callApiCommentList,
  callApiDetailIntro,
  callApiAddComment,
  callApiUpdateComment,
  callApiDeleteComment,
  callApiAddReply,
  callApiDeleteReply,
  callApiAddPlace,
  callApiAddLike,
} from "../api";
import { actions, types } from "../reducer/detail";
import {
  fork,
  all,
  put,
  call,
  take,
  takeLatest,
  delay,
} from "redux-saga/effects";
import isInProgress from "../isInProgressDate";

export function* fetchAdditional(action) {
  const { contentTypeId, contentId } = action.payload;
  yield put(actions.setLoading(true));
  yield put(actions.setLoadingComments(true));
  try {
    const response = yield call(callApiDetailIntro, contentTypeId, contentId);
    const comments = yield call(callApiCommentList, contentId);

    yield put(
      actions.setAdditional({
        destination: {
          lat: response.data.mapy,
          lng: response.data.mapx,
        },
        overview: response.data.overview,
        inProgress: isInProgress(
          response.eventstartdata,
          response.eventenddate
        ),
        additionalInfos: Object.entries(response.data),
      })
    );
    yield put(actions.setComments(comments.data));
    // 로딩 테스트용 딜레이
    yield delay(1000);
    yield put(actions.setLoading(false));
    yield put(actions.setLoadingComments(false));
  } catch (err) {
    yield put(actions.setError(err));
  }
}

export function* addComments(action) {
  let { comment, place } = action.payload;
  yield put(actions.setLoadingComments(true));
  yield put(actions.setError(""));
  try {
    const res = yield call(callApiAddPlace, place);
    comment.place = res.data;
    yield call(callApiAddComment, comment);

    // 성공시b
    // 댓글목록 다시 불러오기
    yield put(actions.setLoadingComments(true));
    const comments = yield call(callApiCommentList, place.contentid);
    yield put(actions.setComments(comments.data));
  } catch (err) {
    // 실패시
    yield put(actions.setError(err));
  }
  yield delay(1000);
  yield put(actions.setLoadingComments(false));
}

export function* updateComment(action) {
  const { commentId, content, commenter, contentId } = action.payload;
  yield put(actions.setLoadingComments(true));
  yield put(actions.setError(""));
  try {
    yield call(callApiUpdateComment, commentId, content, commenter);
    // 댓글목록 다시 불러오기
    yield put(actions.setLoadingComments(true));
    const comments = yield call(callApiCommentList, contentId);
    yield put(actions.setComments(comments.data));
  } catch (err) {
    yield put(actions.setError(err));
  }
  yield delay(1000);
  yield put(actions.setLoadingComments(false));
}

export function* deleteComment(action) {
  const { commentId, commenter, contentId } = action.payload;
  yield put(actions.setLoadingComments(true));
  yield put(actions.setError(""));
  try {
    yield call(callApiDeleteComment, commentId, commenter);
    // 댓글목록 다시 불러오기
    yield put(actions.setLoadingComments(true));
    const comments = yield call(callApiCommentList, contentId);
    yield put(actions.setComments(comments.data));
  } catch (err) {
    yield put(actions.setError(err));
  }
  yield delay(1000);
  yield put(actions.setLoadingComments(false));
}

export function* addReply(action) {
  const { contentId, commentId, reply } = action.payload;
  yield put(actions.setLoadingComments(true));
  yield put(actions.setError(""));
  try {
    yield call(callApiAddReply, commentId, reply);
    // 댓글목록 다시 불러오기
    const comments = yield call(callApiCommentList, contentId);
    yield put(actions.setComments(comments.data));
  } catch (err) {
    yield put(actions.setError(err));
  }
  yield delay(1000);
  yield put(actions.setLoadingComments(false));
}

export function* deleteReply(action) {
  const { contentId, commentId, replyId, commenter } = action.payload;
  yield put(actions.setLoadingComments(true));
  yield put(actions.setError(""));
  try {
    yield call(callApiDeleteReply, commentId, replyId, commenter);
    const comments = yield call(callApiCommentList, contentId);
    yield put(actions.setComments(comments.data));
  } catch (err) {
    yield put(actions.setError(err));
  }
  yield delay(1000);
  yield put(actions.setLoadingComments(false));
}

export function* addLike(action) {
  const { userId, commentId } = action.payload;
  yield put(actions.setError(""));
  try {
    yield call(callApiAddLike, userId, commentId);
    yield put(actions.addlike(userId, commentId));
  } catch (err) {
    yield put(actions.setError(err));
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
