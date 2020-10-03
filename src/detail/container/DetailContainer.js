import Detail from "../component/Detail";
import { getCategory } from '../../common/categoryCode';
import { connect } from "react-redux";

function DetailContainer(props) {
  const {place, ids} = props;

  return (
  <React.Fragment>
    <Detail place={place} category={getCategory(ids.contentTypeId)}/>
  </React.Fragment>
  );
};

const mapStateToProps = state => ({
  place: {
    isClose: state.detail.dist <= 1000,
    isPopular: state.detail.readcount >= 2500,
    ...state.detail.place
  },
  ids: state.detail.ids
});
export default connect(
  mapStateToProps,
  null
)(DetailContainer);