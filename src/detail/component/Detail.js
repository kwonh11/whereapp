import styled from "styled-components";
import { Avatar, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { blue, green, red } from "@material-ui/core/colors";


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  position: absolute;
  top: 0;
  z-index: 1;
`;
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  margin-top: 30vh;
  width: 1000px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3), 0 -6px 16px -6px rgba(0,0,0,0.025);
  z-index: 100;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 5px;
`;
const TitleContainer = styled.div`
  width: 1000px;
  height: 100%;
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
  background-color: ${props => props.color};
  color: #fff;
  margin-top: 14px;
  margin-right: 5px;
`;

const ShortDivider = styled(Divider)`
  border: 2px;
  width: 1000px;
  margin: 10px;
`;
const InfoContainer = styled.div`
  width: 100%;
  padding: 50px 10px;
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
`;

const useStyles = makeStyles((theme) => ({
  blue: {
    position: "absolute",
    top: "0",
    width: "70px",
    height: "70px",
    margin: "20px",
    fontSize: "large",
    fontWeight: "bold",
    color: "white",
    backgroundColor: blue[800],
    zIndex:500,
  },
  red: {
    position: "absolute",
    top: "0",
    width: "70px",
    height: "70px",
    margin: "20px",
    fontSize: "large",
    fontWeight: "bold",
    color: "white",
    backgroundColor: red[900],
    zIndex:500,
  },
  green: {
    position: "absolute",
    top: "0",
    width: "70px",
    height: "70px",
    margin: "20px",
    fontSize: "large",
    fontWeight: "bold",
    color: "white",
    backgroundColor: green[900],
    zIndex:500,
  },
}));



export default function Detail( props ) {
  const classes = useStyles();
  const {place, category} = props;
  const {
    firstimage, title, date, addr1, tel, dist, readcount, isClose, isOnline, isPopular
  } = place;

  return (
    <React.Fragment>
      <HeaderContainer>
        <TitleContainer>
          <CategoryWrap>
            {category}
          </CategoryWrap>
          <TitleWrap> {title} </TitleWrap>
          <BadgeWrap>
            <DateWrap> {date} </DateWrap>
            {/* {additionalInfo.isInProgress && <Badge color="blue"> 진행중 </Badge> } */}
            {isPopular && <Badge color="red"> 인기 </Badge> }
            {isClose && <Badge color="blue"> 가까움 </Badge> }
            {isOnline && <Badge color="green"> 온라인 </Badge> }
          </BadgeWrap>
          <ShortDivider />
          <InfoContainer>
            <InfoWrap> {addr1} </InfoWrap>
            <InfoWrap> {tel} </InfoWrap>
          </InfoContainer>
        </TitleContainer>
      </HeaderContainer>

      <ImageContainer>
        <Avatar className={isOnline? classes.green : isClose ? classes.blue : classes.red}>
          { isOnline? "Online" : Math.ceil(dist/100)/10 +"KM"}
        </Avatar>
        <Image src={firstimage} />
      </ImageContainer>
    </React.Fragment>
  );
};

