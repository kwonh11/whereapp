import styled from "styled-components";
import { Avatar, Paper } from "@material-ui/core";
import CommentsInput from './CommentsInput';
import Comments from './Comments';
import {getCategory} from '../../common/categoryCode';
import { makeStyles } from "@material-ui/core/styles";

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
const useStyle = makeStyles(() => ({
  typeAvatar: {
    fontSize: "small",
    fontWeight: "bold",
    backgroundColor: "#484848",
    margin: "8px 5px 0 0"
  },
}))
export default function Detail({ place, handleScrap, handleShare, loading, comments }) {
  const {contentId, image, type, title, date, address, tel, dist, readCount} = place;
  const classes = useStyle();
  return (
    <DetailContainer elevation={3}>
      <ImageContainer>
          <Image src={image} />
          <TitleContainer>
            <TitleWrap>
              <Avatar aria-label="category" className={classes.typeAvatar}>
                  {getCategory(type)}
              </Avatar>
              {title} 
              <DateWrap>{date}</DateWrap>
            </TitleWrap>
            <DateWrap>
              {`조회수 : ${readCount}`}
            </DateWrap>
          </TitleContainer>
          <BadgeWrap>
            {readCount >=2000 && <Badge color="red"> 추천 </Badge> }
            {dist < 1000 && <Badge color="green"> 가까움 </Badge> }
          </BadgeWrap>
          <DescriptionWrap>
            주소 : {address} <br/>
            전화번호 : {tel} <br/>
          </DescriptionWrap>
      </ImageContainer>
      <CommentsInput handleScrap={handleScrap} handleShare={handleShare} comments={comments} />
      <Comments comments={comments} loading={loading} />
    </DetailContainer>
  );
}
