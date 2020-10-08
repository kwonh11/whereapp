import Detail from "../component/Detail";
import { getCategory } from '../../common/categoryCode';
import { useSelector } from "react-redux";

export default function DetailContainer() {
  const place = useSelector(state => ({
      isClose: state.detail.dist <= 1000,
      isPopular: state.detail.readcount >= 3000,
      isOnline: state.detail.place.addr1.includes("온라인"),
      ...state.detail.place,
  }));
  const ids = useSelector(state => state.detail.ids);

  return (
  <React.Fragment>
    <Detail place={place} category={getCategory(ids.contentTypeId)}/>
  </React.Fragment>
  );
};
