import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import PlaceList from "../component/PlaceList";
import { actions } from "../../common/reducer/place";
import { actions as locationActions } from "../../common/reducer/location";

// reselector
const getPlaceList = (state) => state.place.placeList;
const getCategoryCode = (state) => state.place.categoryCode;
const placeListWithCategoryCode = createSelector(
  [getPlaceList, getCategoryCode],
  (placeList, categoryCode) => {
    if (!categoryCode) return placeList;
    return placeList.filter((place) => place.contenttypeid === categoryCode);
  }
);

export default function PlaceContainer(props) {
  const { viewType, isLoading, categoryCode } = useSelector((state) => ({
    viewType: state.place.viewType,
    categoryCode: state.place.categoryCode,
    isLoading: state.place.isLoading,
  }));
  const placeList = useSelector(placeListWithCategoryCode);
  const { origin, isHandledAddress } = useSelector((state) => state.location);
  const { arrange, dist } = useSelector((state) => state.place);

  const dispatch = useDispatch();

  const handleSelectTab = React.useCallback(
    (contentTypeId) => {
      dispatch(actions.setPlaceListCategoryCode(contentTypeId));
    },
    [dispatch]
  );
  const setPlaceViewType = React.useCallback(
    (viewType) => {
      dispatch(actions.setPlaceViewType(viewType));
    },
    [dispatch]
  );
  const requestAreaBasedList = React.useCallback(
    (origin) => {
      dispatch(
        locationActions.requestAreaBasedList({ origin, isHandledAddress })
      );
    },
    [dispatch]
  );

  const handleChangeFilter = React.useCallback(
    (e) => {
      dispatch(
        actions.setFilter({ value: e.target.value, name: e.target.name })
      );
    },
    [dispatch]
  );

  React.useEffect(() => {
    requestAreaBasedList(origin);
  }, [origin.lat, origin.lng]);

  return (
    <PlaceList
      placeList={placeList}
      isLoading={isLoading}
      categoryCode={categoryCode}
      viewType={viewType}
      handleSelectTab={handleSelectTab}
      setPlaceViewType={setPlaceViewType}
      arrange={arrange}
      dist={dist}
      handleChangeFilter={handleChangeFilter}
    />
  );
}
