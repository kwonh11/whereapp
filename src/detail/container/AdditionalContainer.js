import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from "@material-ui/icons";
import { IconButton, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Overview from "../component/Overview";
import AdditionalComponent from "../component/Additional";
import Map from "../component/Map";
import { useSelector, useDispatch } from "react-redux";
import { types, actions } from "../../common/reducer/detail";
import { actions as userActions } from "../../common/reducer/user";

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
const HeartBtn = styled(IconButton)`
  ${(props) =>
    props.heart &&
    css`
      color: red !important;
    `}
`;

export default function AdditionalContainer(props) {

  const { origin } = useSelector(state => state.location);
  const { contentTypeId, contentId } = useSelector(state => state.detail.ids);
  const { additional, isLoading } = useSelector(state => state.detail);
  const isOnline = useSelector(state => state.detail.place.addr1.includes("온라인"));
  const dispatch = useDispatch();

  const requestDetails = React.useCallback((contentTypeId, contentId) => {
    dispatch(actions.requestDetails({ contentTypeId, contentId }))
  }, [dispatch]);
  const setAdditional = React.useCallback((additional) => {
    dispatch(actions.setAdditional({ additional }))
  }, [dispatch]);
  const setInitializeAdditional = React.useCallback(() => {
    dispatch(actions.setInitializeAdditional());
  },[dispatch]);
  const { hearts, isLoggedIn } = useSelector((state) => state.user);
  const [isHeart, setIsHeart] = useState(false);
  const [snack, setSnack] = React.useState(false);

  useEffect(() => {
    requestDetails(contentTypeId, contentId);
    const heartCheck = hearts.some(
      (heart) => parseInt(heart.contentid) === contentId
    );
    setIsHeart(heartCheck);
  }, [contentId]);

  const handleClickHeart = () => {
    if (isLoggedIn) {
      setIsHeart(!isHeart);
      dispatch(userActions.setHeartsRequest(place));
    } else {
      setSnack(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnack(false);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <> Loading ... </>
      ) : (
      <>
      <Overview description={additional.overview} />
      <AdditionalComponent additional={additional.additionalInfos} />
      <MapContainer>
            <Map origin={origin} destination={additional.destination} setInitializeAdditional={setInitializeAdditional}/>
      </MapContainer>
          <ActionsWrap>
            <HeartBtn onClick={handleClickHeart} heart={isHeart ? 1 : 0}>
              <FavoriteIcon style={{ width: "1.5rem", height: "1.5rem" }} />
            </HeartBtn>
            <IconButton onClick={() => console.log("share")}>
              <ShareIcon />
            </IconButton>
          </ActionsWrap>
      </>
      )}
    </React.Fragment>
  );
}
