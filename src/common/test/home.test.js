import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, delay, put } from "redux-saga/effects";
import { callApiBestList, callApiGetAddress, getUsersLocation } from "../api";
import getDistance from "../getDistance";
import { actions, types } from "../reducer/home";
import { actions as locationActions } from "../reducer/location";
import { fetchBestList } from "../saga/home";

describe("fetchBestList", () => {
  const payload = {
    regionCode: 1,
    isHandledAddress: false,
    origin: {},
  };
  const action = actions.requestBestPlaceList({ payload });
  const gen = cloneableGenerator(fetchBestList)();
  expect(gen.next().value).toEqual(put(actions.setLoading(true)));
  expect(gen.next().value).toEqual(put(actions.setError("")));
  expect(gen.next().value).toEqual(call(getUsersLocation));
  expect(gen.next().value).toEqual(call(getUsersLocation));
});
