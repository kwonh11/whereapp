import styled from "styled-components";
import { Avatar, Divider } from "@material-ui/core";
import device from "../../common/device";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  margin-top: 50px;
  z-index: 1;
`;
const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  margin-top: 0;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  z-index: 100;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 5px;
`;
const TitleContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TitleWrap = styled.div`
  padding: 4px;
  font-size: 3.5rem;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;
const DateWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 3px;
  margin-top: 14px;
  margin-right: 10px;
  font-size: 1rem;
  color: #888;
`;
const BadgeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 4px;
`;
const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 15px;
  padding: 5px;
  background-color: ${(props) => props.color};
  color: #fff;
  margin-top: 14px;
  margin-right: 5px;
  @media ${device.tablet} {
    font-size: 10px;
  } ;
`;

const ShortDivider = styled(Divider)`
  border: 2px;
  width: 100%;
  margin: 0 50px;
  margin: 10px;
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const CategoryWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #777;
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;
const InfoWrap = styled.div`
  height: 30px;
  padding: 10px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  @media ${device.tablet} {
    font-size: 10px;
  }
`;
const StyledAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    position: absolute;
    top: 0;
    width: 70px;
    height: 70px;
    margin: 20px;
    font-size: 1rem;
    color: white;
    opacity: 0.8;
    background-color: ${(props) =>
      props.bgcolor === "blue"
        ? "#1565c0"
        : props.bgcolor === "red"
        ? "#b71c1c"
        : "#1b5e20"};
    z-index: 500;

    @media ${device.laptop} {
      width: 60px;
      height: 60px;
      margin: 15px;
      font-size: 13px;
    }
    @media ${device.tablet} {
      width: 45px;
      height: 45px;
      margin: 10px;
      font-size: 10px;
    }
  }
`;

export default function Detail(props) {
  const { place, category } = props;
  const {
    firstimage,
    title,
    date,
    addr1,
    tel,
    dist,
    readcount,
    isClose,
    isOnline,
    isPopular,
  } = place;

  return (
    <React.Fragment>
      <HeaderContainer>
        <TitleContainer>
          <CategoryWrap>{category}</CategoryWrap>
          <TitleWrap> {title} </TitleWrap>
          <BadgeWrap>
            <DateWrap> {date} </DateWrap>
            {/* {additionalInfo.isInProgress && <Badge color="blue"> 진행중 </Badge> } */}
            {isPopular && <Badge color="red"> 인기 </Badge>}
            {isClose && !isOnline && <Badge color="blue"> 가까움 </Badge>}
            {isOnline && <Badge color="green"> 온라인 </Badge>}
          </BadgeWrap>
          <ShortDivider />
          <InfoContainer>
            <InfoWrap> {addr1} </InfoWrap>
            <InfoWrap> {tel} </InfoWrap>
          </InfoContainer>
        </TitleContainer>
      </HeaderContainer>

      <ImageContainer>
        <StyledAvatar bgcolor={isOnline ? "green" : isClose ? "blue" : "red"}>
          {isOnline ? "Online" : Math.ceil(dist / 100) / 10 + "KM"}
        </StyledAvatar>
        <Image src={firstimage} />
      </ImageContainer>
    </React.Fragment>
  );
}
