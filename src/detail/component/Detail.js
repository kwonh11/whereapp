import styled from "styled-components";
import { Avatar, Paper, IconButton, Divider, Chip } from "@material-ui/core";
import CommentsInput from './CommentsInput';
import Comments from './Comments';
import { getCategory } from '../../common/categoryCode';
import { makeStyles } from "@material-ui/core/styles";
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@material-ui/icons';
import { callApiDetailIntro } from '../../common/api';
import isInProgress from '../../common/isInProgressDate';
import toKorean from '../../common/toKorean';
import { withRouter } from "react-router-dom";
import { blue, red } from "@material-ui/core/colors";
import Map from './Map';

const DetailContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1300px;
  position: relative;
  padding: 30px;
`;
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
  background-color: ${props => props.color === "red"? "red" : props.color === "blue"? "blue" : "green"};
  color: #fff;
  margin-top: 14px;
  margin-right: 5px;
`;
const DescriptionWrap = styled.div`
  fontSize: 1rem;
  font-weight: bold;
  padding: 4px;
`;
const ActionsWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
const AdditionalContainer = styled.div`
  width: 1000px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const AdditionalHeader = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.8rem;
`;
const AdditionalWrap = styled.div`
  min-height: 22px;
  padding: 6px 0;
  width: 50%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
`;
const AdditionalInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const AdditionalLeft = styled.div`
  display: inline;
  width: 50%;
  font-weight: bold;
`;
const AdditionalRight = styled.div`
  width: 50%;
  font-weight: bold;
  color: ${props => props.color === "red" ? "red" : ""};
`;
const StyledChip = styled(Chip)`
  $ .MuiChip-label {
    padding: 20px;
  }
`;
const ShorterDivider = styled(Divider)`
  width: 100%;
  margin: 30px 0 0 10px !important;
`;
const MapContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;
const useStyles = makeStyles((theme) => ({
  green: {
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
}));



function Detail( props ) {
  const classes = useStyles();
  const {place, handleScrap, handleShare, comments, match} = props;
  const {firstimage, title, date, addr1, tel, dist, readcount} = place;
  const {contentid, contenttypeid} = match.params;

  const [addtionalInfo, setAddtionalInfo] = React.useState({
    origin: {},
    destination: {},
    isInProgress: false,
    additional: []
  });

  React.useEffect(() => {
    callApiDetailIntro(contenttypeid, contentid)
      .then(res => {
        console.log(`DetailCommonIntro API 호출 ${contenttypeid} ${contentid}`);

        setAddtionalInfo({
          origin: JSON.parse(sessionStorage.getItem("location")), 
          destination: {
            lat: res.data.mapy,
            lng: res.data.mapx
          },
          inProgress: isInProgress(res.eventstartdate, res.eventenddate),
          additional: Object.entries(res.data)
        });
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <DetailContainer elevation={3}>
      <HeaderContainer>
        <TitleContainer>
          <CategoryWrap>
            {getCategory(contenttypeid)}
          </CategoryWrap>
          <TitleWrap> {title} </TitleWrap>
          <BadgeWrap>
            <DateWrap> {date} </DateWrap>
            {addtionalInfo.isInProgress && <Badge color="blue"> 진행중 </Badge> }
            {readcount >=2000 && <Badge color="red"> 인기 </Badge> }
            {dist < 1000 && <Badge color="green"> 가까움 </Badge> }
          </BadgeWrap>
          <ShortDivider />
          <InfoContainer>
            <InfoWrap> {addr1} </InfoWrap>
            <InfoWrap> {tel} </InfoWrap>
          </InfoContainer>
        </TitleContainer>
      </HeaderContainer>

      <ImageContainer>
        <Avatar className={dist >= 1000 ? classes.red : classes.green}>
          {`${ Math.ceil(dist/10) / 100}km`}
        </Avatar>
        <Image src={firstimage} />
      </ImageContainer>

      <AdditionalContainer>
        <AdditionalHeader>
          상세정보
          <ShorterDivider />
        </AdditionalHeader>
        {addtionalInfo.additional.map((info, i) => {
          const key = toKorean(info[0]);
          if (key && info[1]) {
            return (
              <AdditionalWrap key={i}>
                <AdditionalInfo>
                    <AdditionalLeft>
                      <StyledChip variant="outlined" label={key} />
                    </AdditionalLeft>
                    <AdditionalRight color={info[1]==="없음" || info[1]==="불가" ? "red":"normal"} dangerouslySetInnerHTML={{__html: info[1] }} />
                </AdditionalInfo>
            </AdditionalWrap> 
            )
          }
          return null;
        })}
      </AdditionalContainer>

      <MapContainer>
        <Map 
        origin={addtionalInfo.origin} 
        destination={addtionalInfo.destination} />
      </MapContainer>

      <ActionsWrap>
          <IconButton aria-label="add to favorites" onClick={handleScrap} style={{fontSize: "1.6rem"}}>
              <FavoriteIcon/>
          </IconButton>
          <IconButton aria-label="share" onClick={handleShare} style={{fontSize: "1.6rem"}}>
              <ShareIcon />
          </IconButton>
      </ActionsWrap>
      

      <CommentsInput />
      <Comments comments={comments}/>
    </DetailContainer>
  );
};

export default withRouter(Detail);