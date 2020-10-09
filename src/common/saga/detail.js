import {
  callApiCommentList,
  callApiDetailIntro,
  callApiAddComment,
  callApiUpdateComment,
  callApiDeleteComment
} from "../api";
import { actions, types } from "../reducer/detail";
import { fork, all, put, call, take } from "redux-saga/effects";
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
      yield put(
        actions.setComments(comments.data)
      );
    } catch (err) {
      yield put(actions.setError(err));
    }
    yield put(actions.setLoading(false));
    yield put(actions.setLoadingComments(false));
  }
};

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
};

export function* addComments(action) {
  while (true) {
    const { comment } = yield take(types.REQUEST_ADD_COMMENT);
    const { contentId } = yield comment;
    yield put(actions.setLoadingComments(true));
    yield put(actions.setError(""));
    try {
      yield call(callApiAddComment, comment);
      // 성공시
      // 댓글목록 다시 불러오기
      yield put(actions.setLoadingComments(true));
      const comments = yield call(callApiCommentList, contentId);
      yield put(actions.setComments(comments.data));
    } catch (err) {
      // 실패시
      yield put(actions.setError(err));
    }
    yield put(actions.setLoadingComments(false));
  }
};

export function* deleteComment(action) {
  while (true) {
    const { _id, commenter } = yield take(types.REQUEST_DELETE_COMMENT);
    // yield put(actions.setLoadingComments(true));
    // yield put(actions.setError(""));
    try {
      yield call(callApiDeleteComment, _id, commenter);
      // 성공시
      // 댓글목록 다시 불러오기
      yield put(actions.setLoadingComments(true));
      const comments = yield call(callApiCommentList, contentId);
      yield put(actions.setComments(comments.data));
    } catch (err) {
      // 실패시
      yield put(actions.setError(err));
    }
    yield put(actions.setLoadingComments(false));
  }
}


export default function* watcher() {
  yield all([fork(fetchAdditional), fork(fetchComments), fork(addComments), fork(deleteComment)]);
};
