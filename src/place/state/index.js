import createReducer from '../../common/createReducer';

export const types = {
    SET_PLACELIST: "place/SET_PLACELIST",
    SET_PLACELIST_TYPE: "place/SET_PLACELIST_TYPE",
    SET_PLACELIST_CATEGORY_CODE: "place/SET_PLACELIST_CATEGORY_CODE",
    SET_PLACELIST_LOADING: "place/SET_PLACELIST_LOADING"
};

export const actions = {
    setPlaceList: (placeList) => ({type: types.SET_PLACELIST, placeList}),
    setPlaceListType: (listType) => ({type: types.SET_PLACELIST_TYPE, listType}),
    setPlaceListCategoryCode: (categoryCode) => ({type: types.SET_PLACELIST_CATEGORY_CODE, categoryCode}),
    setPlaceListLoading: (isLoading) => ({type:types.SET_PLACELIST_LOADING, isLoading})
};

const INITIAL_STATE = {
    placeList: [],
    listType: "card",
    isLoading: true,
    categoryCode: 0,
};

const reducer = createReducer(INITIAL_STATE, {
    [types.SET_PLACELIST]: (state,action) => {state.placeList = action.placeList},
    [types.SET_PLACELIST_TYPE]: (state,action) => {state.listType = action.listType},
    [types.SET_PLACELIST_CATEGORY_CODE]: (state,action) => {state.categoryCode = action.categoryCode},
    [types.SET_PLACELIST_LOADING]: (state,action) => {state.isLoading = action.isLoading}
});

export default reducer;