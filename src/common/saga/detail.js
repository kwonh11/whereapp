import {
  callApiCommentList,
  callApiDetailIntro,
  callApiAddComment,
  callApiUpdateComment,
  callApiDeleteComment,
  callApiAddReply,
  callApiDeleteReply,
  addPlace,
} from "../api";
import { actions, types } from "../reducer/detail";
import { fork, all, put, call, take, takeLatest } from "redux-saga/effects";
import isInProgress from "../isInProgressDate";

export function* fetchAdditional(action) {
  while (true) {
    const { contentTypeId, contentId } = yield take(types.REQUEST_DETAILS);
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
          additional: Object.entries(response.data),
        })
      );
      yield put(actions.setComments(comments.data));
      yield put(actions.setLoading(false));
      yield put(actions.setLoadingComments(false));
    } catch (err) {
      yield put(actions.setError(err));
    }
  }
}

export function* fetchComments() {
  while (true) {
    const { contentId } = yield take(types.REQUEST_COMMENTS);
    yield put(actions.setLoadingComments(true));
    yield put(actions.setError(""));
    try {
      const comments = yield call(callApiCommentList, contentId);
      yield put(actions.setComments(comments));
    } catch (err) {
      yield put(actions.setError(err));
    }
    yield put(actions.setLoadingComments(false));
  }
}

export function* addComments(action) {
  let { comment, place } = action.payload;
  yield put(actions.setLoadingComments(true));
  yield put(actions.setError(""));
  try {
    const objId = yield call(addPlace, place);
    // comment.contentId = contentId.data
    comment.place = objId.data;
    yield call(callApiAddComment, comment);
    console.log("objId.data = " + objId.data);
    // 성공시
    // 댓글목록 다시 불러오기
    yield put(actions.setLoadingComments(true));
    const comments = yield call(callApiCommentList, objId.data);
    yield put(actions.setComments(comments.data));
    } catch (err) {
      // 실패시
      yield put(actions.setError(err));
    }
    yield put(actions.setLoadingComments(false));
}


export function* updateComment(action) {
  while (true) {
    const { _id, content, commenter, contentId } = yield take(types.REQUEST_UPDATE_COMMENT);

    yield put(actions.setLoadingComments(true));
    yield put(actions.setError(""));
    try {
      yield call(callApiUpdateComment, _id, content, commenter);
      // 댓글목록 다시 불러오기
      yield put(actions.setLoadingComments(true));
      const comments = yield call(callApiCommentList, contentId);
      yield put(actions.setComments(comments.data));
    } catch (err) {
      yield put(actions.setError(err));
    }
    yield put(actions.setLoadingComments(false));
  }
}

export function* deleteComment(action) {
  while (true) {
    const { _id, commenter, contentId } = yield take(
      types.REQUEST_DELETE_COMMENT
    );
    yield put(actions.setLoadingComments(true));
    yield put(actions.setError(""));
    try {
      yield call(callApiDeleteComment, _id, commenter);
      // 댓글목록 다시 불러오기
      yield put(actions.setLoadingComments(true));
      const comments = yield call(callApiCommentList, contentId);
      yield put(actions.setComments(comments.data));
    } catch (err) {
      yield put(actions.setError(err));
    }
    yield put(actions.setLoadingComments(false));
  }
}

export function* addReply(action) {
  while (true) {
    const { contentId, commentId, reply } = yield take(types.REQUEST_ADD_REPLY);
    yield put(actions.setError(""));
    try {
      yield call(callApiAddReply, commentId, reply);
      // 댓글목록 다시 불러오기
      const comments = yield call(callApiCommentList, contentId);
      yield put(actions.setComments(comments.data));
    } catch (err) {
      yield put(actions.setError(err));
    }
  }
}

export function* deleteReply(action) {
  while (true) {
    const { contentId, commentId, _id, commenter } = yield take(
      types.REQUEST_DELETE_REPLY
    );
    yield put(actions.setError(""));
    try {
      yield call(callApiDeleteReply, commentId, _id, commenter);
      const comments = yield call(callApiCommentList, contentId);
      yield put(actions.setComments(comments.data));
    } catch (err) {
      yield put(actions.setError(err));
    }
  }
}

export default function* watcher() {
  yield takeLatest(types.REQUEST_ADD_COMMENT, addComments);
  yield all([
    fork(fetchAdditional),
    fork(fetchComments),
    fork(updateComment),
    fork(deleteComment),
    fork(addReply),
    fork(deleteReply),
  ]);
}
