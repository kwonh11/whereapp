import createReducer from '../../common/createReducer';

export const types = {
    REQUEST_BEST_PLACE_LIST: "home/REQUEST_BEST_PLACE_LIST",
    REQUEST_CATEGORY_CODE: "home/REQUEST_CATEGORY",
    SET_BEST_PLACE_LIST: "home/SET_BEST_PLACE_LIST",
    SET_LOADING: "home/SET_LOADING",
    SET_ERROR: "home/SET_ERROR",
};

export const actions = {
    requestBestPlaceList: () => ({type: types.REQUEST_BEST_PLACE_LIST}),
    requestCategoryCode: (categoryCode) => ({type: types.REQUEST_CATEGORY_CODE, categoryCode}),
    setBestPlaceList: (bestPlaceList) => ({type: types.SET_BEST_PLACE_LIST, bestPlaceList}),
    setLoading: (isLoading) => ({type: types.SET_LOADING, isLoading}),
    setError: (error) => ({type: types.SET_ERROR, error}),
};

const INITIAL_STATE = {
    bestPlaceList: [],
    isLoading: true,
    error: ""
};

const reducer = createReducer(INITIAL_STATE, {
    [types.SET_BEST_PLACE_LIST]: (state, action) => {state.bestPlaceList = action.bestPlaceList},
    [types.SET_LOADING]: (state, action) => {state.isLoading = action.isLoading},
    [types.SET_ERROR]: (state, action) => {state.error = action.error},
});

export default reducer;