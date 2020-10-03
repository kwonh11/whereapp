import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import PlaceList from "../component/PlaceList";
import { actions } from '../state';
import { withRouter } from "react-router-dom";

function PlaceContainer(props) {
  const {placeList, listType, isLoading} = props;
  const {setPlaceList, setPlaceListType, setPlaceListCategoryCode, setPlaceListLoading} = props;

  const [selectPlace, setSelectPlace] = useState(null);
  const [tab, setTab] = useState(0);

  const handleSelectTab = (contentTypeId, tab) => {
    setPlaceListCategoryCode(contentTypeId);
    // 삼항식 부분 reselect패키지 이용해서 구현하자
    tab
      ? setSelectPlace(placeList.filter((place) => place.contenttypeid === contentTypeId))
      : setSelectPlace(placeList);
    setTab(tab);
  };

  return (
    <PlaceList
      placeList={selectPlace || placeList}
      isLoading={isLoading}
      handleSelectTab={handleSelectTab}
      tab={tab}
      setPlaceListType={setPlaceListType}
      listType={listType}
    />
  );
}

const mapStateToProps = (state, props) => ({
  placeList: state.place.placeList,
  listType: state.place.listType,
  isLoading: state.place.isLoading,
})
export default connect(
  mapStateToProps,
  actions
)(withRouter(PlaceContainer));