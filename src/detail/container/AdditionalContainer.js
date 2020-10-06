import styled from 'styled-components';
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@material-ui/icons';
import { IconButton } from "@material-ui/core";
import isInProgress from '../../common/isInProgressDate';
import { callApiDetailIntro } from '../../common/api';
import Overview from '../component/Overview';
import AdditionalInfo from '../component/Additional';
import Map from '../component/Map';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { types } from '../state';

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

    const { origin, contentTypeId, contentId, additionalInfo, isLoading, setDetails } = props;

    React.useEffect(() => {
        setDetails(contentTypeId, contentId);
    }, []);

    return (
    <React.Fragment>
        <Overview description={additionalInfo.overview} />
        <AdditionalInfo additional={additionalInfo.additional} />
        <MapContainer>
            <Map 
            origin={origin}
            destination={additionalInfo.destination} />
        </MapContainer>
        <ActionsWrap>
            <IconButton aria-label="add to favorites" onClick={() => console.log("scrap")} >
                <FavoriteIcon style={{width: "1.5rem", height: "1.5rem"}}/>
            </IconButton>
            <IconButton aria-label="share" onClick={() => console.log("share")} >
                <ShareIcon />
            </IconButton>
        </ActionsWrap>
    </React.Fragment>
    )
};

const mapStateToProps = state => ({
    origin: { ...state.location.origin },
    contentTypeId: state.detail.ids.contentTypeId,
    contentId: state.detail.ids.contentId,
    additionalInfo: state.detail.additional,
    isLoading: state.detail.isLoading
});
const mapDispatchToProps = dispatch => ({
    setDetails: (contentTypeId, contentId) => dispatch({type: types.SET_DETAILS, contentTypeId, contentId})
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdditionalContainer);