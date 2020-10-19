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
  const dummyOrigin = {
    lat: 37.502804,
    lng: 126.9539593,
  };

  const action = actions.requestBestPlaceList(payload);
  const { regionCode, isHandledAddress, origin } = action.payload;
  const gen = cloneableGenerator(fetchBestList)({ payload });
  expect(gen.next().value).toEqual(put(actions.setLoading(true)));
  expect(gen.next().value).toEqual(put(actions.setError("")));

  it("getUsersLocation API가 정상적으로 작동되는가", () => {
    gen.next();
    expect(call(getUsersLocation)).toHaveProperty("lng");
    expect(call(getUsersLocation)).toHaveProperty("lat");
  });
  gen.next(); // setOrigin

  it("callApiGetAddress API가 정상적으로 작동되는가", () => {
    gen.next();
    expect(call(callApiGetAddress, dummyOrigin)).data.toBe(
      "대한민국 서울특별시 상도동 상도SH빌아파트상도팰리스후문"
    );
  });
  gen.next(); // setAddress

  it("callApBestList가 20개의 요소를 응답하는가", () => {
    gen.next();
    // bestListAPI가 20개를 리턴해주는가
    expect(call(callApiBestList, regionCode)).data.toHaveLength(20);
  });

  it("placeList.map() 메서드가 return 되는가", () => {
    gen.next().toHaveReturned(); // bestList.data.map()
  });
  gen.next(); // setBestPlaceList

  it("실패 했을 경우", () => {
    const errorGen = gen.clone();
    const errorMsg = "error";
    expect(errorGen.throw(errorMsg).value).toEqual(
      put(actions.setError(errorMsg))
    );
  });
  it("성공했을 경우", () => {
    gen.next(); // delay
    const successGen = gen.clone();
    expect(successGen.next(Promise.resolve()).value).toEqual(
      put(actions.setLoading(false))
    );
  });
});
