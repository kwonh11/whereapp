import styled from "styled-components";
import { Avatar, Paper, IconButton, Divider } from "@material-ui/core";
import CommentsInput from './CommentsInput';
import Comments from './Comments';
import { getCategory } from '../../common/categoryCode';
import { makeStyles } from "@material-ui/core/styles";
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@material-ui/icons';
import { callApiDetailIntro } from '../../common/api';
import { withRouter } from "react-router-dom";

const DetailContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1300px;
  padding: 30px;
  position: relative;
  & img {
    margin-bottom: 20px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  width: 1000px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3), 0 -6px 16px -6px rgba(0,0,0,0.025);
  padding: 50px 30px 100px 30px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;
const Badge = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 15px;
  border: 2px solid ${props => props.color === "red"? "red" : "green"};
  padding: 4px;
  color: ${props => props.color === "red"? "red" : "green"};
  margin: 50px 5px;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 30px;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const TitleWrap = styled.div`
  padding: 4px;
  font-size: 1.9rem;
  font-weight: bolder;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const DateWrap = styled.div`
  height: 30px;
  padding: 0 3px;
  margin-top: 9px;
  font-size: 1rem;
  color: #777;
  align-self: end;
`;
const BadgeWrap = styled.div`
  height: 30px;
  padding: 4px;
  margin: 20px 0;
`;
const DescriptionWrap = styled.div`
  fontSize: 1rem;
  font-weight: bold;
  padding: 4px;
`;
const ActionsWrap = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const useStyle = makeStyles(() => ({
  typeAvatar: {
    fontSize: "small",
    fontWeight: "bold",
    backgroundColor: "#484848",
    margin: "8px 5px 0 0"
  },
}));

function Detail( props ) {
  const {place, handleScrap, handleShare, comments, match} = props;
  const {firstimage, title, date, addr1, tel, dist, readcount} = place;
  const {contentid, contenttypeid} = match.params;
  const classes = useStyle();

  const [addtionalInfo, setAddtionalInfo] = React.useState({});

  React.useLayoutEffect(() => {
    callApiDetailIntro(contenttypeid, contentid)
      .then(res => {
        console.log(`DetailIntro API 호출 ${contenttypeid} ${contentid}`);
        setAddtionalInfo({...res});
      })
      .catch(err => {
        console.log(err);
      })
    }, []);
    
    console.log(addtionalInfo);
  return (
    <DetailContainer elevation={3}>
      <ImageContainer>
          <Image src={firstimage} />
          <TitleContainer>
            <TitleWrap>
              <Avatar aria-label="category" className={classes.typeAvatar}>
                  {getCategory(contenttypeid)}
              </Avatar>
              {title} 
              <DateWrap>{date? date : ''}</DateWrap>
            </TitleWrap>
            <DateWrap>
              {`조회수 : ${readcount}`}
            </DateWrap>
          </TitleContainer>
          <BadgeWrap>
            {readcount >=2000 && <Badge color="red"> 추천 </Badge> }
            {dist < 1000 && <Badge color="green"> 가까움 </Badge> }
          </BadgeWrap>
          <DescriptionWrap>
            주소 : {addr1} <br/>
            전화번호 : {tel} <br/>
          </DescriptionWrap>
          <ActionsWrap>
                <IconButton aria-label="add to favorites" onClick={handleScrap}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" onClick={handleShare}>
                    <ShareIcon />
                </IconButton>
            </ActionsWrap>
      </ImageContainer>
      <CommentsInput handleScrap={handleScrap} handleShare={handleShare} />
      <Comments comments={comments} />
    </DetailContainer>
  );
};

export default withRouter(Detail);