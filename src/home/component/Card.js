
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardHeader, CardMedia, CardContent,
    Avatar, IconButton, Typography, CardActions} from "@material-ui/core";
import { Favorite as FavoriteIcon, Share as ShareIcon, MoreVert as MoreVertIcon} from '@material-ui/icons';
import { red } from "@material-ui/core/colors";

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

const useStyles = makeStyles((theme) => ({
    root: {
      width: 330,
      minWidth: 330,
      height: 500,
      margin: "0 15px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    avatarRed: {
      backgroundColor: red[500]
    },
  }));
// image, title, description, category 를 입력받아 Card를 리턴하는 컴포넌트 함수
export default function NewsCard( { image, category, title, description, originalLink, date, company} ) {
    const classes = useStyles();
    // desciprion 100글자 제한 + 말줄임표
    const subString = (desc,count) => {
        const isString = typeof desc === "string";
        return (isString && desc.length >= count? desc.substring(0,count) + "..." : desc);
    }

    // test
    // redux 구현 후 article 매개변수를 redux store를 통해 정확한 데이터로 넘겨줘야함
    const testHandleOnClickScrap = (article) => {
      callApiScrap(article).catch(err =>console.log(err));
    }

    return (
        <StyledCard className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="news" className={classes.avatar}>
                {company? company.slice(0,4) : ''}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={subString(title, 20)}
            subheader={date}
          />
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {subString(description, 80)}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={testHandleOnClickScrap}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </StyledCard>
      );
}