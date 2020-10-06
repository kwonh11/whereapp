import { connect } from 'react-redux';
import PlaceList from "../component/PlaceList";
import { actions } from '../state';
import { makePlaceListWithCategoryCode } from '../state/selector';

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