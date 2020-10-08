import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  CardActions,
} from "@material-ui/core";
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from "@material-ui/icons";
import { blue, green, red } from "@material-ui/core/colors";
import { getCategory } from "../categoryCode";
import { Link } from "react-router-dom";
import defaultImage from "../../images/defaultImage.png";
import { useDispatch, useSelector } from "react-redux";
import { actions, types } from "../reducer/detail";

const StyledCard = styled(Card)`
  width: 480px;
  height: 500px;
  margin: 0 7px;
  min-width: 480px;
  transition: all 0.7s ease-out;

  &:hover {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1), 0px 2px 3px rgba(0, 0, 0, 0.12),
      0px 1px 3px rgba(0, 0, 0, 0.14);
    transform: translateY(-5px);
    cursor: pointer;
  }

  & .MuiCardHeader-content {
    display: flex;
    width: 100%;
    align-items: center;
  }
`;

const BottomIconsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MarksWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  & div {
    margin: 0 4px;
  }
`;
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "66%", // 330 * 500
  },
  typeAvatar: {
    fontSize: "small",
    fontWeight: "bold",
    backgroundColor: "#484848",
  },
  blue: {
    marginRight: "20px",
    fontSize: "x-small",
    fontWeight: "bold",
    color: "white",
    backgroundColor: blue[800],
  },
  red: {
    marginRight: "20px",
    fontSize: "x-small",
    fontWeight: "bold",
    color: "white",
    backgroundColor: red[900],
  },
  green: {
    marginRight: "20px",
    fontSize: "x-small",
    fontWeight: "bold",
    color: "white",
    backgroundColor: green[900],
  },
  content: {
    padding: "0 16px",
  },
  small: {
    fontSize: "1.35rem",
  },
}));
const Badge = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 15px;
  border: 2px solid ${(props) => (props.color === "red" ? "red" : "green")};
  padding: 4px;
  margin: 0 3px;
  color: ${(props) => (props.color === "red" ? "red" : "green")};
`;

// image, title, description, category 를 입력받아 Card를 리턴하는 컴포넌트 함수
export default function PlaceCard(props) {
  const classes = useStyles();
  const { simple, place } = props;
  const {
    contentid,
    contenttypeid,
    firstimage,
    type,
    title,
    date,
    addr1,
    readcount,
    tel,
    dist,
    isOnline,
    isClose,
    isPopular,
    isLoading,
  } = place;

  const dispatch = useDispatch();
  const setIds = React.useCallback((contentTypeId, contentId) => {
    dispatch({
      type: types.SET_IDS,
      ids: {
        contentTypeId,
        contentId,
    }});
  }, [dispatch]);
  const setPlace = React.useCallback((place) => {
    dispatch({
      type: types.SET_PLACE, place: {
        ...place,
        isClose: place.dist <= 1000
    } });
  }, [dispatch]);

  const handleClickCard = (contentTypeId, contentId, place) => {
    setIds(contentTypeId, contentId);
    setPlace(place);
  };
  return (
    <StyledCard>
      <Link to={`/place/${contenttypeid}/${contentid}`}>
        <CardMedia
          className={classes.media}
          image={firstimage || defaultImage}
          title={title}
          onClick={() => handleClickCard(contenttypeid, contentid, place)}
        />
      </Link>
      <CardHeader
        className={classes.small}
        title={title}
        subheader={
          <>
            {isPopular && <Badge color="red"> 인기 </Badge>}
            {isOnline ? (
              <Badge color="green"> 온라인 </Badge>
            ) : isClose ? (
              <Badge color="green"> 가까움 </Badge>
            ) : null}
          </>
        }
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {addr1}
        </Typography>
        {!simple && (
          <Typography variant="body2" color="textSecondary" component="p">
            {tel}
          </Typography>
        )}
      </CardContent>
      <BottomIconsWrap>
        <CardActions disableSpacing>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
        <MarksWrap>
          <Avatar className={classes.typeAvatar}>
            {getCategory(contenttypeid)}
          </Avatar>
          <Avatar
            className={
              isOnline ? classes.green : isClose ? classes.blue : classes.red
            }
          >
            {isOnline ? "Online" : Math.ceil(dist / 100) / 10 + "KM"}
          </Avatar>
        </MarksWrap>
      </BottomIconsWrap>
    </StyledCard>
  );
}

// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     setIds: () =>
//       dispatch({
//         type: types.SET_IDS,
//         ids: {
//           contentId: props.place.contentid,
//           contentTypeId: props.place.contenttypeid,
//         },
//       }),
//     setPlace: () =>
//       dispatch({
//         type: types.SET_PLACE,
//         place: {
//           isClose: props.place.dist <= 1000,
//           ...props.place,
//         },
//       }),
//   };
// };
// export default connect(null, mapDispatchToProps)(PlaceCard);
