import createReducer from "../createReducer";

export const types = {
  SET_PLACELIST: "place/SET_PLACELIST",
  SET_PLACELIST_TYPE: "place/SET_PLACELIST_TYPE",
  SET_PLACELIST_CATEGORY_CODE: "place/SET_PLACELIST_CATEGORY_CODE",
  SET_PLACELIST_LOADING: "place/SET_PLACELIST_LOADING",

  SET_FILTER: "place/SET_FILTER",
  SET_ARRANGE: "place/SET_ARRANGE",
  SET_DIST: "place/SET_DIST",
};

export const actions = {
  setPlaceList: (placeList) => ({ type: types.SET_PLACELIST, placeList }),
  setPlaceViewType: (viewType) => ({
    type: types.SET_PLACELIST_TYPE,
    viewType,
  }),
  setPlaceListCategoryCode: (categoryCode) => ({
    type: types.SET_PLACELIST_CATEGORY_CODE,
    categoryCode,
  }),
  setPlaceListLoading: (isLoading) => ({
    type: types.SET_PLACELIST_LOADING,
    isLoading,
  }),

  setFilter: (payload) => ({ type: types.SET_FILTER, payload }),
  setArrange: (payload) => ({ type: types.SET_ARRANGE, payload }),
  setDist: (payload) => ({ type: types.SET_DIST, payload }),
};

const INITIAL_STATE = {
  placeList: [],
  viewType: "card",
  isLoading: true,
  categoryCode: "",
  dist: 1000,
  arrange: "A",
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_PLACELIST]: (state, action) => {
    state.placeList = action.placeList;
  },
  [types.SET_PLACELIST_TYPE]: (state, action) => {
    state.viewType = action.viewType;
  },
  [types.SET_PLACELIST_CATEGORY_CODE]: (state, action) => {
    state.categoryCode = action.categoryCode;
  },
  [types.SET_PLACELIST_LOADING]: (state, action) => {
    state.isLoading = action.isLoading;
  },

  [types.SET_ARRANGE]: (state, action) => {
    state.arrange = action.payload;
  },

  [types.SET_DIST]: (state, action) => {
    state.dist = action.payload;
  },
});

export default reducer;
