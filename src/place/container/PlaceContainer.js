import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import PlaceList from "../component/PlaceList";
import { actions } from '../state';
import { withRouter } from "react-router-dom";
import { makePlaceListWithCategoryCode } from '../state/selector';

const category = [
  { title: "전체" },
  { title: "관광지", id: 12 },
  { title: "문화", id: 14 },
  { title: "축제", id: 15 },
  { title: "여행코스", id: 25 },
  { title: "레포츠", id: 28 },
  { title: "숙박", id: 32 },
  { title: "쇼핑", id: 38 },
  { title: "음식점", id: 39 },
];

function PlaceContainer(props) {
  const { placeList, listType, isLoading } = props;
  const { setPlaceListType, categoryCode, setPlaceListCategoryCode } = props;

  const handleSelectTab = (contentTypeId) => {
    setPlaceListCategoryCode(contentTypeId);
  };

  return (
    <PlaceList
      placeList={placeList}
      isLoading={isLoading}
      handleSelectTab={handleSelectTab}
      categoryCode={categoryCode}
      setPlaceListType={setPlaceListType}
      listType={listType}
    />
  );
}

const makeMapStateToProps = () => {
  const getPlaceListWithCategoryCode = makePlaceListWithCategoryCode();
  const mapStateToProps = (state, props) => {
    return {
      placeList: getPlaceListWithCategoryCode(state, props),
      listType: state.place.listType,
      categoryCode: state.place.categoryCode,
      isLoading: state.place.isLoading,
    }
  }
  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
  actions
)(PlaceContainer);