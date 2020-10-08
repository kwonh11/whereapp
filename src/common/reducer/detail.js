import createReducer from "../createReducer";

export const types = {
  // CARD 클릭 시
  SET_LOADING: "detial/SET_LOADING", // LOADING
  SET_DETAILS: "detail/SET_DETAILS", // saga 트리거
  SET_IDS: "detail/SET_IDS", // 카드 클릭시 params의 contentid, contentidtype 설정
  SET_PLACE: "detail/SET_PLACE", // DETAIL 화면
  SET_ADDITIONAL: "detail/SET_ADDITIONAL", // 소개 API를 이용한 추가데이터

  // 댓글 관련
  SET_COMMENTS: "detail/SET_COMMENTS", // API로 댓글 불러오기
  ADD_COMMENT: "detail/ADD_COMMENT", // 댓글 작성    -  디바운스기능 추가 필요
  REMOVE_COMMENT: "detail/REMOVE_COMMENT", // 선택한 댓글 삭제
  ADD_LIKE: "detail/ADD_LIKE", // 댓글 좋아요
  CANCLE_LIKE: "detail/CANCLE_LIKE", // 좋아요 취소
  ADD_REPLY: "detail/ADD_REPLY", // 대댓글 작성
  REMOVE_REPLY: "detail/REMOVE_REPLY", // 대댓글 삭제

  // 에러
  SET_ERROR: "detail/SET_ERROR",
};

export const actions = {
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
  setDetails: (contentTypeId, contentId) => ({
    type: types.SET_DETAILS,
    contentTypeId,
    contentId,
  }),
  setIds: (ids) => ({ type: types.SET_IDS, ids }),
  setPlace: (place) => ({ type: types.SET_PLACE, place }),
  setAdditional: (additional) => ({ type: types.SET_ADDITIONAL, additional }),
  setComments: (comments) => ({ type: types.SET_COMMENTS, comments }),
  addComment: (comment) => ({ type: types.ADD_COMMENT, comment }),
  removeComment: (contentId, id) => ({
    type: types.REMOVE_COMMENT,
    contentId,
    id,
  }),
  addLike: (contentId, id) => ({ type: types.ADD_LIKE, contentId, id }),
  cancleLike: (contentId, id) => ({ type: types.CANCLE_LIKE, contentId, id }),
  addReply: (contentId, id, reply) => ({
    type: types.ADD_REPLY,
    contentId,
    id,
    reply,
  }),
  removeReply: (contentId, id, index) => ({
    type: types.REMOVE_REPLY,
    contentId,
    id,
    index,
  }),
  setError: (error) => ({ type: types.SET_ERROR, error }),
};

const INITIAL_STATE = {
  isLoading: true,
  ids: {
    contentId: "",
    contentTypeId: "",
  },
  place: {
    title: "",
    firstimage: "",
    date: "",
    addr1: "",
    tel: "",
    dist: "",
    readcount: "",
    destination: "",
    overview: "",
    isInProgress: false,
  },
  additional: {
    destination: { lat: "", lng: "" },
    overview: "",
    inProgress: false,
    additional: [],
  },
  comments: [
    {
      reply: [],
    },
  ],
  error: "",
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_LOADING]: (state, action) => {
    state.isLoading = action.isLoading;
  },
  [types.SET_IDS]: (state, action) => {
    state.ids = action.ids;
  },
  [types.SET_PLACE]: (state, action) => {
    state.place = action.place;
  },
  [types.SET_ADDITIONAL]: (state, action) => {
    state.additional = action.additional;
  },
  [types.SET_COMMENTS]: (state, action) => {
    state.comments = action.comments;
  },
  [types.ADD_COMMENT]: (state, action) => {
    state.comments.push(action.comment);
  },
  [types.REMOVE_COMMENT]: (state, action) => {
    const index = state.comments.findIndex((item) => item.id === action.id);
    state.comments.splice(index, 1);
  },
  [types.ADD_LIKE]: (state, action) => {
    const comment = state.comments.find((item) => item.id === action.id);
    if (comment) state.comments[index].like += 1;
  },
  [types.CANCLE_LIKE]: (state, action) => {
    const comment = state.comments.find((item) => item.id === action.id);
    if (comment) state.comments[index].like -= 1;
  },
  [types.ADD_REPLY]: (state, action) => {
    const comment = state.comments.find((item) => item.id === action.id);
    if (comment) comment.reply.push(action.reply);
  },
  [types.REMOVE_REPLY]: (state, action) => {
    const comment = state.comments.find((item) => item.id === action.id);
    if (comment) {
      comment.splice(action.index, 1);
    }
  },
  [types.SET_ERROR]: (state, action) => {
    state.error = action.error;
  },
});

export default reducer;
