import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import PlaceList from "../component/PlaceList";
import { actions, types } from "../../common/reducer/place";

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

  const dispatch = useDispatch();
  const handleSelectTab = React.useCallback((contentTypeId) => {
    dispatch({ type: types.SET_PLACELIST_CATEGORY_CODE, categoryCode: contentTypeId })
  }, [dispatch]);
  const setPlaceListType = React.useCallback((listType) => {
    dispatch({ type: types.SET_PLACELIST_TYPE, listType });
  }, [dispatch]);
  
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
