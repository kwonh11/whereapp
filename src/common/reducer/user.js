import createReducer from "../createReducer";

export const types = {
  LOGIN_IN_REQUEST: "user/LOGIN_IN_REQUEST",
  LOGIN_IN_SUCCESS: "user/LOGIN_IN_SUCCESS",
  LOGIN_IN_ERROR: "user/LOGIN_IN_ERROR",

  UPLOAD_IMAGE_REQUEST: "user/UPLOAD_IMAGE_REQUEST",
  UPLOAD_IMAGE_SUCCESS: "user/UPLOAD_IMAGE_SUCCESS",
  UPLOAD_IMAGE_ERROR: "user/UPLOAD_IMAGE_ERROR",
};

export const actions = {
  loginInRequest: () => ({ type: types.LOGIN_IN_REQUEST }),
  loginInSuccess: (payload) => ({ type: types.LOGIN_IN_SUCCESS, payload }),
  loginInError: (error) => ({ type: types.LOGIN_IN_ERROR, error }),

  uploadImageRequest: (image) => ({ type: types.UPLOAD_IMAGE_REQUEST, image }),
  uploadImageSuccess: (image) => ({ type: types.UPLOAD_IMAGE_SUCCESS, image }),
  uploadImageError: (error) => ({ type: types.UPLOAD_IMAGE_ERROR, error }),
};

const INITIAL_STATE = {
  isLoggedIn: false,
  info: null,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_IN_SUCCESS]: (state, action) => {
    state.isLoggedIn = true;
    state.info = action.payload;
  },

  [types.UPLOAD_IMAGE_SUCCESS]: (state, action) => {
    state.info.image = action.image;
  },
});

export default reducer;
