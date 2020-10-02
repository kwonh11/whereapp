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
  place: state.detail.place,
  ids: state.detail.ids
});

export default connect(
  mapStateToProps,
  null
)(DetailContainer);