import createReducer from "../createReducer";

export const types = {
  LOGIN_IN_REQUEST: "user/LOGIN_IN_REQUEST",
  LOGIN_IN_SUCCESS: "user/LOGIN_IN_SUCCESS",
  LOGIN_IN_ERROR: "user/LOGIN_IN_ERROR",

  UPLOAD_IMAGE_REQUEST: "user/UPLOAD_IMAGE_REQUEST",
  UPLOAD_IMAGE_SUCCESS: "user/UPLOAD_IMAGE_SUCCESS",
  UPLOAD_IMAGE_ERROR: "user/UPLOAD_IMAGE_ERROR",

  SET_HEARTS_REQUEST: "user/SET_HEARTS_REQUEST",
  SET_HEARTS_SUCCESS: "user/SET_HEARTS_SUCCESS",
  SET_HEARTS_ERROR: "user/SET_HEARTS_ERROR",

  SET_VIEW_TYPE: "user/SET_VIEW_TYPE"
};

export const actions = {
  loginInRequest: () => ({ type: types.LOGIN_IN_REQUEST }),
  loginInSuccess: (payload) => ({ type: types.LOGIN_IN_SUCCESS, payload }),
  loginInError: (error) => ({ type: types.LOGIN_IN_ERROR, error }),

  uploadImageRequest: (image) => ({ type: types.UPLOAD_IMAGE_REQUEST, image }),
  uploadImageSuccess: (image) => ({ type: types.UPLOAD_IMAGE_SUCCESS, image }),
  uploadImageError: (error) => ({ type: types.UPLOAD_IMAGE_ERROR, error }),

  setHeartsRequest: (payload) => ({ type: types.SET_HEARTS_REQUEST, payload }),
  setHeartsSuccess: (payload) => ({ type: types.SET_HEARTS_SUCCESS, payload }),
  setHeartsError: (payload) => ({ type: types.SET_HEARTS_ERROR, payload }),

  setViewType: (viewType) => ({ type: types.SET_VIEW_TYPE, viewType })
};

const INITIAL_STATE = {
  isLoggedIn: false,
  info: {
    _id: "",
  },
  hearts: [],
  comments: [],
  error: null,
  viewType: "card"
};

const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_IN_SUCCESS]: (state, action) => {
    state.isLoggedIn = true;
    state.info = action.payload.info;
    state.comments = action.payload.comments;
    state.hearts = action.payload.hearts;
  },

  [types.UPLOAD_IMAGE_SUCCESS]: (state, action) => {
    state.info.image = action.image;
  },

  [types.SET_HEARTS_SUCCESS]: (state, action) => {
    state.hearts = action.payload;
  },
  [types.SET_HEARTS_ERROR]: (state, action) => {
    state.error = action.payload;
  },
  [types.SET_VIEW_TYPE]: (state, action) => {
    state.viewType = action.viewType;
  }
});

export default reducer;
