
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardHeader, CardMedia, CardContent,
    Avatar, IconButton, Typography, CardActions} from "@material-ui/core";
import { Favorite as FavoriteIcon, Share as ShareIcon, MoreVert as MoreVertIcon} from '@material-ui/icons';
import { blue, green, red } from "@material-ui/core/colors";
import CATEGORY_CODE from '../../common/categoryCode';
//test 중
import {callApiScrap} from '../../common/api';

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
const useStyles = makeStyles((theme) => ({
    root: {
      width: 330,
      minWidth: 330,
      height: 440,
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
  }));

// image, title, description, category 를 입력받아 Card를 리턴하는 컴포넌트 함수
export default function NewsCard( props ) {
    const classes = useStyles();
    const {image, type, title, date, address, tel, dist} = props;
    // desciprion 100글자 제한 + 말줄임표
    // const subString = (desc,count) => {
    //     const isString = typeof desc === "string";
    //     return (isString && desc.length >= count? desc.substring(0,count) + "..." : desc);
    // }
    // test
    // redux 구현 후 article 매개변수를 redux store를 통해 정확한 데이터로 넘겨줘야함
    const testHandleOnClickScrap = (article) => {
      callApiScrap(article).catch(err =>console.log(err));
    };

    return (
        <StyledCard className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="news" className={classes.typeAvatar}>
                {CATEGORY_CODE.find(item=> item.code == type).name}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={<Typography variant="h6">
              {title}
            </Typography>}
            subheader={date}
          />
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {address}<br/>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {`TEL .${tel}`}<br/>
            </Typography>
          </CardContent>
          <BottomIconsWrap>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={testHandleOnClickScrap}>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <Avatar aria-label="distance" className={dist >= 1000? classes.red : classes.green} >
                {`${dist/1000}km`}
            </Avatar>
          </BottomIconsWrap>
        </StyledCard>
      );
}