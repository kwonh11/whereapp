import styled from 'styled-components';
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@material-ui/icons';
import { IconButton } from "@material-ui/core";
import isInProgress from '../../common/isInProgressDate';
import { callApiDetailIntro } from '../../common/api';
import Overview from '../component/Overview';
import AdditionalInfo from '../component/Additional';
import Map from '../component/Map';
import { withRouter } from "react-router-dom";

const MapContainer = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`;
const ActionsWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AdditionalContainer(props) {
    const [additionalInfo, setAdditionalInfo] = React.useState({
        origin: {},
        destination: {},
        isInProgress: false,
        additional: []
      });
    
    const {contenttypeid, contentid} = props.match.params;

    React.useEffect(() => {
    callApiDetailIntro(contenttypeid, contentid)
        .then(res => {
        console.log(`DetailCommonIntro API 호출 ${contenttypeid} ${contentid}`);
        setAdditionalInfo({
            origin: JSON.parse(sessionStorage.getItem("location")), 
            destination: {
            lat: res.data.mapy,
            lng: res.data.mapx
            },
            overview: res.data.overview,
            inProgress: isInProgress(res.eventstartdate, res.eventenddate),
            additional: Object.entries(res.data)
        });
        })
        .catch(err => {
        console.log(err);
        })
    }, []);


    const handleShare = () => {
        console.log("share");
    }
    const handleScrap = () => {
        console.log("scrap");
    }

    return (
    <React.Fragment>
        <Overview description={additionalInfo.overview} />
        <AdditionalInfo additional={additionalInfo.additional} />
        <MapContainer>
            <Map 
            origin={additionalInfo.origin} 
            destination={additionalInfo.destination} />
        </MapContainer>
        <ActionsWrap>
            <IconButton aria-label="add to favorites" onClick={handleScrap} >
                <FavoriteIcon style={{width: "1.5rem", height: "1.5rem"}}/>
            </IconButton>
            <IconButton aria-label="share" onClick={handleShare} >
                <ShareIcon />
            </IconButton>
        </ActionsWrap>
    </React.Fragment>
    )
}

export default withRouter(AdditionalContainer);