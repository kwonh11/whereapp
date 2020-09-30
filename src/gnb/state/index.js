import createReducer from '../../common/createReducer';

export const types = {
    SET_ORIGIN: "location/SET_ORIGIN",
    SET_REVERSE_GEOCODE_ORIGIN: "location/SET_REVERSE_GEOCODE_ORIGIN"
};

export const actions = {
    setOrigin: (origin) => ({ type: types.SET_ORIGIN, origin}),
    setReverseGeocoded: (reverseGeocoded) => ({type: types.SET_REVERSE_GEOCODE_ORIGIN, reverseGeocoded})
};

const INITIAL_STATE = {
    origin: { lat: "", lng: ""},
    reverseGeocded: ""
};

const reducer = createReducer(INITIAL_STATE, {
    [types.SET_ORIGIN]: (state, action) => {state.origin = action.origin},
    [types.SET_REVERSE_GEOCODE_ORIGIN]: (state, action) => {state.reverseGeocoded = action.reverseGeocoded}
});

export default reducer;

