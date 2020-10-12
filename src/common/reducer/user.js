import createReducer from "../createReducer";

export const types = {
  LOGIN_IN_REQUEST: "user/LOGIN_IN_REQUEST",
  LOGIN_IN_SUCCESS: "user/LOGIN_IN_SUCCESS",
  LOGIN_IN_ERROR: "user/LOGIN_IN_ERROR",

  UPLOAD_IMAGE_REQUEST: "user/UPLOAD_IMAGE_REQUEST",
  UPLOAD_IMAGE_SUCCESS: "user/UPLOAD_IMAGE_SUCCESS",
  UPLOAD_IMAGE_ERROR: "user/UPLOAD_IMAGE_ERROR",

  GET_SCRAP_REQUEST: "user/GET_SCRAP_REQUEST",
  GET_SCRAP_SUCCESS: "user/GET_SCRAP_SUCCESS",
  GET_SCRAP_ERROR: "user/GET_SCRAP_ERROR",

  GET_COMMENTS_REQUEST: "user/GET_COMMENTS_REQUEST",
  GET_COMMENTS_SUCCESS: "user/GET_COMMENTS_SUCCESS",
  GET_COMMENTS_ERROR: "user/GET_COMMENTS_ERROR"
};

export const actions = {
  loginInRequest: () => ({ type: types.LOGIN_IN_REQUEST}),
  loginInSuccess: (payload) => ({ type: types.LOGIN_IN_SUCCESS, payload }),
  loginInError: (error) => ({ type: types.LOGIN_IN_ERROR, error }),

  uploadImageRequest: (image) => ({ type: types.UPLOAD_IMAGE_REQUEST, image }),
  uploadImageSuccess: (image) => ({ type: types.UPLOAD_IMAGE_SUCCESS, image }),
  uploadImageError: (error) => ({ type: types.UPLOAD_IMAGE_ERROR, error }),

  getCommentsRequest: (payload) => ({ type: types.GET_COMMENTS_REQUEST, payload }),
  getCommentsSuccess: (payload) => ({ type: types.GET_COMMENTS_SUCCESS, payload }),
  getCommentsError: (payload) => ({ type: types.GET_COMMENTS_ERROR, payload }),

};

const INITIAL_STATE = {
  isLoggedIn: false,
  info: {
    _id: "",
  },
  scrap:[],
  comments:[]
};

const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_IN_SUCCESS]: (state, action) => {
    state.isLoggedIn = true;
    state.info = action.payload.info;
  },

  [types.UPLOAD_IMAGE_SUCCESS]: (state, action) => {
    state.info.image = action.image;
  },
});

export default reducer;
