import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import PlaceList from "../component/PlaceList";
import { actions, types } from "../../common/reducer/place";
import { actions as locationActions } from "../../common/reducer/location";

// reselector
const getPlaceList = state => state.place.placeList;
const getCategoryCode = state => state.place.categoryCode;
const placeListWithCategoryCode = createSelector(
  [getPlaceList, getCategoryCode],
  (placeList, categoryCode) => {
    if (!categoryCode) return placeList;
    return placeList.filter((place) => place.contenttypeid === categoryCode);
  }
);

export default function PlaceContainer(props) {

  const {
    listType, isLoading, categoryCode
  } = useSelector(state => ({
    listType: state.place.listType,
    categoryCode: state.place.categoryCode,
    isLoading: state.place.isLoading,
  }));
  const placeList = useSelector(placeListWithCategoryCode);
  const {origin, address, isHandledAddress} = useSelector(state => state.location);

  const dispatch = useDispatch();
  const handleSelectTab = React.useCallback((contentTypeId) => {
    dispatch(actions.setPlaceListCategoryCode(contentTypeId));
  }, [dispatch]);
  const setPlaceListType = React.useCallback((listType) => {
    dispatch(actions.setPlaceListType(listType));
  }, [dispatch]);
  const requestAreaBasedList = React.useCallback((origin) => {
    dispatch(locationActions.requestAreaBasedList({origin, isHandledAddress}));
  }, [dispatch]);
  

  React.useEffect(()=> {
    requestAreaBasedList(origin);
  },[origin.lat, origin.lng]);

  return (
    <PlaceList
      placeList={placeList}
      isLoading={isLoading}
      categoryCode={categoryCode}
      listType={listType}
      handleSelectTab={handleSelectTab}
      setPlaceListType={setPlaceListType}
    />
  );
};
