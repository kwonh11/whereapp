import createReducer from "../createReducer";

export const types = {
  REQUEST_BEST_PLACE_LIST: "home/REQUEST_BEST_PLACE_LIST",
  SET_BEST_PLACE_LIST: "home/SET_BEST_PLACE_LIST",
  SET_REGION_CODE: "home/SET_REGION_CODE",
  SET_LOADING: "home/SET_LOADING",
  SET_ERROR: "home/SET_ERROR",
  SET_SNACK_OPEN: "home/SET_SNACK_OPEN",
  SET_SNACK_CONTENT: "home/SET_SNACK_CONTENT",
};

export const actions = {
  requestBestPlaceList: (payload) => ({
    type: types.REQUEST_BEST_PLACE_LIST,
    payload,
  }),
  setBestPlaceList: (bestPlaceList) => ({
    type: types.SET_BEST_PLACE_LIST,
    bestPlaceList,
  }),
  setRegionCode: (regionCode) => ({ type: types.SET_REGION_CODE, regionCode }),
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
  setError: (error) => ({ type: types.SET_ERROR, error }),

  setSnackOpen: (snackOpen) => ({ type: types.SET_SNACK_OPEN, snackOpen }),
  setSnackContent: (snackContent) => ({
    type: types.SET_SNACK_CONTENT,
    snackContent,
  }),
};

const INITIAL_STATE = {
  bestPlaceList: [],
  regionCode: "1",
  isLoading: true,
  error: "",
  snackOpen: false,
  snackContent: "",
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_BEST_PLACE_LIST]: (state, action) => {
    state.bestPlaceList = action.bestPlaceList;
  },
  [types.SET_REGION_CODE]: (state, action) => {
    state.regionCode = action.regionCode;
  },
  [types.SET_LOADING]: (state, action) => {
    state.isLoading = action.isLoading;
  },
  [types.SET_ERROR]: (state, action) => {
    state.error = action.error;
  },
  [types.SET_SNACK_OPEN]: (state, action) => {
    state.snackOpen = action.snackOpen;
  },
  [types.SET_SNACK_CONTENT]: (state, action) => {
    state.snackContent = action.snackContent;
  },
});

export default reducer;
