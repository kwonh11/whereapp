import createReducer from "../createReducer";

export const types = {
  REQUEST_AREA_BASED_LIST: "location/REQUEST_AREA_BASED_LIST",
  REQUEST_LOCATION: "location/REQUEST_LOCATION",
  SET_ORIGIN: "location/SET_ORIGIN",
  SET_ADDRESS: "location/SET_ADDRESS",
  SET_ERROR: "location/SET_ERROR",
  SET_HANDLED_ADDRESS: "location/SET_HANDLED_ADDRESS",

  PREDICTIONS_REQUEST: "location/PREDICTIONS_REQUEST",
  PREDICTIONS_SUCCESS: "location/PREDICTIONS_SUCCESS",
  PREDICTIONS_ERROR: "location/PREDICTIONS_ERROR",

  SEARCH_ADDRESS_REQUEST: "location/SEARCH_ADDRESS_REQUEST",
  SEARCH_ADDRESS_SUCCESS: "location/SEARCH_ADDRESS_SUCCESS",
  SEARCH_ADDRESS_ERROR: "location/SEARCH_ADDRESS_ERROR",
};

export const actions = {
  requestAreaBasedList: (payload) => ({ type: types.REQUEST_AREA_BASED_LIST, payload }),
  requestLocation: () => ({ type: types.REQUEST_LOCATION }),
  setOrigin: (origin) => ({ type: types.SET_ORIGIN, origin }),
  setAddress: (address) => ({ type: types.SET_ADDRESS, address }),
  setError: (error) => ({ type: types.SET_ERROR, error }),
  setHandledAddress: (isHandledAddress) => ({ type: types.SET_HANDLED_ADDRESS, isHandledAddress}),

  predictionsRequest: (payload) => ({
    type: types.PREDICTIONS_REQUEST,
    payload,
  }),
  predictionsSuccess: (payload) => ({
    type: types.PREDICTIONS_SUCCESS,
    payload,
  }),
  predictionsError: () => ({ type: types.PREDICTIONS_ERROR }),

  searchAddressRequest: (payload) => ({
    type: types.SEARCH_ADDRESS_REQUEST,
    payload,
  }),
  searchAddressSuccess: (payload) => ({
    type: types.SEARCH_ADDRESS_SUCCESS,
    payload,
  }),
  searchAddressError: () => ({ type: types.SEARCH_ADDRESS_ERROR }),
};

const INITIAL_STATE = {
  origin: { lat: "", lng: "" },
  address: "",
  error: "",
  predictions: [],
  isHandledAddress: false,
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
  [types.SET_HANDLED_ADDRESS]: (state, action) => {
    state.isHandledAddress = action.isHandledAddress;
  },

  [types.PREDICTIONS_REQUEST]: (state, action) => {
    state.address = action.payload;
  },
  [types.PREDICTIONS_SUCCESS]: (state, action) => {
    state.predictions = action.payload;
  },

  [types.SEARCH_ADDRESS_REQUEST]: (state, action) => {
    state.address = action.payload;
  },
});

export default reducer;
