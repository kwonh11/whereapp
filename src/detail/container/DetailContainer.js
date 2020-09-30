import Detail from "../component/Detail";
import { getCategory } from '../../common/categoryCode';
import { withRouter } from "react-router-dom";

function DetailContainer(props) {
  const {place, match} = props;
  const {contentid, contenttypeid} = match.params;

  return (
  <React.Fragment>
    <Detail place={place} category={getCategory(contenttypeid)}/>
  </React.Fragment>
  );
};

export default withRouter(DetailContainer);