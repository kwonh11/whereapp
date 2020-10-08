import createReducer from "../createReducer";

export const types = {
  REQUEST_AREA_BASED_LIST: "location/REQUEST_AREA_BASED_LIST",
  REQUEST_LOCATION: "location/REQUEST_LOCATION",
  SET_ORIGIN: "location/SET_ORIGIN",
  SET_ADDRESS: "location/SET_ADDRESS",
  SET_ERROR: "location/SET_ERROR",
};

export const actions = {
  requestAreaBasedList: () => ({ type: types.REQUEST_AREA_BASED_LIST }),
  requestLocation: () => ({ type: types.REQUEST_LOCATION }),
  setOrigin: (origin) => ({ type: types.SET_ORIGIN, origin }),
  setAddress: (address) => ({ type: types.SET_ADDRESS, address }),
  setError: (error) => ({ type: types.SET_ERROR, error }),
};

const INITIAL_STATE = {
  origin: { lat: "", lng: "" },
  address: "",
  error: "",
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_ORIGIN]: (state, action) => {
    state.origin = action.origin;
  },
  [types.SET_ADDRESS]: (state, action) => {
    state.address = action.address;
  },
  [types.SET_ERROR]: (state, action) => {
    state.error = action.error;
  },
});

export default reducer;
