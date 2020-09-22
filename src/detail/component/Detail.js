import styled from "styled-components";
import { Paper } from "@material-ui/core";
import Comments from './Comments';

const DetailContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 60vw;
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
const TitleContainer = styled.span`
  height: 30px;
  padding: 4px;
`;
const TitleWrap = styled.span`
  padding: 4px;
  font-size: 2rem;
  font-weight: bolder;
`;
const DateWrap = styled.span`
  height: 30px;
  padding: 4px;
  margin: 20px 0;
  font-size: 1rem;
  color: darkgray;
`;
const BadgeWrap = styled.div`
  height: 30px;
  padding: 4px;
  margin: 20px 0;
`;
const descriptionWrap = styled.div`
  fontSize: 1rem;
  font-weight: bold;
  padding: 4px;
`;
export default function Detail({ place, handleScrap, handleShare }) {
  const {contentId, image, type, title, date, address, tel, dist, readCount} = place;
  return (
    <DetailContainer elevation={3}>
      <ImageContainer>
          <Image src={image} />
          <TitleContainer>
            <TitleWrap>
              {title}
            </TitleWrap>
            <DateWrap>
              {date}
            </DateWrap>
          </TitleContainer>
          <BadgeWrap>
            {readCount >=2000 && <Badge color="red"> 추천 </Badge> }
            {dist < 1000 && <Badge color="green"> 가까움 </Badge> }
          </BadgeWrap>
          <descriptionWrap>
            정리할 것들 

            주소 : {address} <br/>
            전화번호 : {tel} <br/>
            조회수 : {readCount} <br/>
            카테고리 : ${type} <br/>
          </descriptionWrap>
      </ImageContainer>
      <Comments handleScrap={handleScrap} handleShare={handleShare}/>
    </DetailContainer>
  );
}
