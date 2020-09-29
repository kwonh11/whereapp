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
import { blue, red } from "@material-ui/core/colors";
import CATEGORY_CODE from "../categoryCode";
import { Link } from "react-router-dom";

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
  green: {
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
  content: {
    padding: "0 16px",
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
export default function NewsCard(props) {
  const classes = useStyles();
  const { item } = props;
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
  } = props.item;

  return (
    <StyledCard>
      <Link
        to={(location) => {
          sessionStorage.setItem("currentPlace", JSON.stringify(item));
          return `/detail/${contentid}`;
        }}
      >
        <CardMedia className={classes.media} image={firstimage} title={title} />
      </Link>
      <CardHeader
        title={title}
        subheader={
          <>
            {readcount >= 2000 && <Badge color="red"> 추천 </Badge>}
            {dist < 1000 && <Badge color="green"> 가까움 </Badge>}
          </>
        }
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {addr1}
          <br />
        </Typography>
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
            {CATEGORY_CODE.find((item) => item.type === contenttypeid).name}
          </Avatar>
          <Avatar className={dist >= 1000 ? classes.red : classes.green}>
            {`${dist / 1000}km`}
          </Avatar>
        </MarksWrap>
      </BottomIconsWrap>
    </StyledCard>
  );
}
