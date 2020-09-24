
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardHeader, CardMedia, CardContent,
    Avatar, IconButton, Typography, CardActions} from "@material-ui/core";
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@material-ui/icons';
import { blue, red } from "@material-ui/core/colors";
import CATEGORY_CODE from '../../common/categoryCode';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)`
  transition: all 0.7s ease-out;
  &:hover{
    box-shadow: 0px 1px 4px rgba(0,0,0,.1), 0px 2px 3px rgba(0,0,0,.12), 0px 1px 3px rgba(0,0,0,.14);
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
const BottomIconsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
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
    root: {
      width: 480,
      minWidth: 480,
      height: 500,
      margin: "0 7px",
    },
    media: {
      height: 0,
      paddingTop: "66%" // 330 * 500
    },
    typeAvatar: {
      fontSize: "small",
      fontWeight: "bold",
      backgroundColor: "#484848"
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
      padding: "0 16px"
    }
  }));
const Badge = styled.span`
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 15px;
    border: 2px solid ${props => props.color === "red"? "red" : "green"};
    padding: 4px;
    margin: 0 3px;
    color: ${props => props.color === "red"? "red" : "green"};
  `;
// image, title, description, category 를 입력받아 Card를 리턴하는 컴포넌트 함수
export default function NewsCard( props ) {
    const classes = useStyles();
    const {item} = props;
    const {contentId, image, type, title, date, address, readCount, tel, dist} = props.item;

    const Title = (props) => {
      const { title, readCount, dist } = props;
      return (
        <React.Fragment>
          {title} 
          {readCount >=2000 && <Badge color="red"> 추천 </Badge> }
          {dist < 1000 && <Badge color="green"> 가까움 </Badge> }
        </React.Fragment>
      )
    }
    return (
        <StyledCard className={classes.root}>
          <Link to={(location)=>{
            sessionStorage.setItem("currentPlace", JSON.stringify(item));
          return `/place/${contentId}`;
          }}>
            <CardMedia
              className={classes.media}
              image={image}
              title={title}
            />
          </Link>
          <CardHeader
            title={<Title title={title} readCount={readCount} dist={dist}/>}
            subheader={date}
          />
          <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary" component="p">
                {address}<br/>
            </Typography>
          </CardContent>
          <BottomIconsWrap>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <MarksWrap>
              <Avatar aria-label="category" className={classes.typeAvatar}>
                  {CATEGORY_CODE.find(item=> item.code == type).name}
              </Avatar>
              <Avatar aria-label="distance" className={dist >= 1000? classes.red : classes.green} >
                  {`${dist/1000}km`}
              </Avatar>
            </MarksWrap>
          </BottomIconsWrap>
        </StyledCard>
      );
}