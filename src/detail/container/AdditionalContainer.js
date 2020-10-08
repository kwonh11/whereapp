import styled from "styled-components";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import Overview from "../component/Overview";
import AdditionalComponent from "../component/Additional";
import Map from "../component/Map";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../../common/reducer/detail";

const MapContainer = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`;
const ActionsWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AdditionalContainer(props) {
  
  const { origin } = useSelector(state => state.location);
  const { contentTypeId, contentId } = useSelector(state => state.detail.ids);
  const { additional, isLoading } = useSelector(state => state.detail);
  const isOnline = useSelector(state => state.detail.place.addr1.includes("온라인"));

  const dispatch = useDispatch();
  const setDetails = React.useCallback(
    (contentTypeId, contentId) => dispatch({ type: types.SET_DETAILS, contentTypeId, contentId })
  , [dispatch]);

  React.useEffect(() => {
    setDetails(contentTypeId, contentId);
  }, []);

  return (
    <React.Fragment>
      {isLoading ?
        <> Loading ... </>
        :
        <>
      <Overview description={additional.overview} />
      <AdditionalComponent additional={additional.additional} />
      <MapContainer>
        <Map origin={origin} destination={additional.destination} isOnline={isOnline}/>
      </MapContainer>
      <ActionsWrap>
        <IconButton
          aria-label="add to favorites"
          onClick={() => console.log("scrap")}
        >
          <FavoriteIcon style={{ width: "1.5rem", height: "1.5rem" }} />
        </IconButton>
        <IconButton aria-label="share" onClick={() => console.log("share")}>
          <ShareIcon />
        </IconButton>
          </ActionsWrap>
          </>
      }
    </React.Fragment>
  );
}

