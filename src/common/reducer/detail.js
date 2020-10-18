import createReducer from "../createReducer";

export const types = {
  // CARD 클릭 시
  SET_LOADING: "detial/SET_LOADING",
  REQUEST_DETAILS: "detail/REQUEST_DETAILS",
  SET_IDS: "detail/SET_IDS", // 카드 클릭시 params의 contentid, contentidtype 설정
  SET_PLACE: "detail/SET_PLACE", // DETAIL 화면
  SET_ADDITIONAL: "detail/SET_ADDITIONAL", // 소개 API를 이용한 추가데이터

  // Detail컴포넌트 언마운트 시
  SET_INITIALIZE_ADDITIONAL: "detail/SET_INITIALIZE_ADDITIONAL",

  // 댓글 관련
  SET_LOADING_COMMENTS: "detail/SET_LOADING_COMMENTS",
  REQUEST_COMMENTS: "detail/REQUEST_COMMENTS",
  SET_COMMENTS: "detail/SET_COMMENTS",
  REQUEST_ADD_COMMENT: "detail/REQUEST_ADD_COMMENT",       
  REQUEST_DELETE_COMMENT: "detail/REQUEST_DELETE_COMMENT", 
  REQUEST_UPDATE_COMMENT: "detail/REQUEST_UPDATE_COMMENT", 
  REQUEST_ADD_REPLY: "detail/REQUEST_ADD_REPLY",
  REQUEST_DELETE_REPLY: "detail/REQUEST_DELETE_REPLY",

  // 댓글 좋아요
  REQUEST_LIKE: "detail/REQUEST_LIKE",
  ADD_LIKE: "detail/ADD_LIKE",

  // 정렬
  SET_SORT_KEY_COMMENTS: "detail/SET_SORT_KEY_COMMENTS",

  // 에러
  SET_ERROR: "detail/SET_ERROR",
};

export const actions = {
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
  setLoadingComments: (isLoadingComments) => ({ type: types.SET_LOADING_COMMENTS, isLoadingComments }),
  requestDetails: (payload) => ({ type: types.REQUEST_DETAILS, payload }),
  setIds: (ids) => ({ type: types.SET_IDS, ids }),
  setPlace: (place) => ({ type: types.SET_PLACE, place }),
  setComments: (comments) => ({ type: types.SET_COMMENTS, comments }),
  setAdditional: (additional) => ({ type: types.SET_ADDITIONAL, ...additional }),

  setInitializeAdditional: () => ({ type: types.SET_INITIALIZE_ADDITIONAL }),
  
  requestAddComment: (payload) => ({ type: types.REQUEST_ADD_COMMENT, payload }),
  requestUpdateComment: (payload) => ({type: types.REQUEST_UPDATE_COMMENT, payload}),
  requestDeleteComment: (payload) => ({ type: types.REQUEST_DELETE_COMMENT, payload }),
  requestAddReply: (payload) => ({type: types.REQUEST_ADD_REPLY, payload}),
  requestDeleteReply: (payload) => ({type: types.REQUEST_DELETE_REPLY, payload}),
  
  requestLike: (payload) => ({ type: types.REQUEST_LIKE, payload }),
  addlike: (userId, commentId) => ({ type: types.ADD_LIKE, commentId, userId }),

  setSortKey: (commentSortKey) => ({type: types.SET_SORT_KEY_COMMENTS, commentSortKey}),
  setError: (error) => ({ type: types.SET_ERROR, error }),
};

const INITIAL_STATE = {
  isLoading: true,
  isLoadingComments: true,
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
    additionalInfos: [],
  },
  commentSortKey: "registered",
  comments: [
    {
      reply: [],
      like: [],
    },
  ],
  error: "",
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_LOADING]: (state, action) => {
    state.isLoading = action.isLoading;
  },
  [types.SET_LOADING_COMMENTS]: (state, action) => {
    state.isLoadingComments = action.isLoadingComments;
  },
  [types.SET_IDS]: (state, action) => {
    state.ids = action.ids;
  },
  [types.SET_PLACE]: (state, action) => {
    state.place = action.place;
  },
  [types.SET_ADDITIONAL]: (state, action) => {
    state.additional.additionalInfos = action.additionalInfos;
    state.additional.destination = action.destination;
    state.additional.inProgress = action.inProgress;
    state.additional.overview = action.overview;
  },
  [types.SET_INITIALIZE_ADDITIONAL]: (state, action) => {
    state.additional.additionalInfos = [];
    state.additional.destination = { lat: "", lng: "" };
    state.additional.inProgress = false;
    state.additional.overview = "";
  },
  [types.SET_COMMENTS]: (state, action) => {
    state.comments = action.comments;
  },

  [types.ADD_LIKE]: (state, action) => {
    const index = state.comments.findIndex((item) => item._id === action.commentId);
    if (index >= 0) {
      console.log(`index : ${index}`);
      const likeIndex = state.comments[index].like.findIndex((item)=> item === action.userId);
      console.log(`likeIndex : ${likeIndex}`);
      if (likeIndex >= 0 ) {
        state.comments[index].like.splice(likeIndex, 1);
      }
      if (likeIndex < 0)  {
        state.comments[index].like.push(action.userId);
      }
    }
  },
  [types.SET_SORT_KEY_COMMENTS]: (state, action) => {
    state.commentSortKey = action.commentSortKey;
  },
  [types.SET_ERROR]: (state, action) => {
    state.error = action.error;
  },
});

export default reducer;
