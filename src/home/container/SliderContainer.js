import { connect } from "react-redux";
import styled from 'styled-components';
import Slider from "../component/Slider";
import { types } from '../state';
import Skeleton from '@material-ui/lab/Skeleton';


const SkeletonContainer = styled.div`
  width: 100%;
  height: 105%;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 80px;
  position: relative;
  padding-bottom: 150px;
  background-color: #f1f1f1;
`;

function SliderContainer(props) {
  const { bestPlaceList, requestBestPlaceList, isLoading } = props;

  React.useEffect(() => {
    requestBestPlaceList();
  }, []);

  if (isLoading) {
    return (
          <SkeletonContainer>
            <div style={{margin: "0 7px"}}>
                <Skeleton variant="rect" width={480} height={330}></Skeleton>
                <Skeleton variant="text" width={300} height={50}></Skeleton>
                <Skeleton variant="text" width={220} height={15} style={{marginTop: "20px"}}></Skeleton>
                <Skeleton variant="text" width={90} height={15}></Skeleton>
                <Skeleton variant="text" height={60}></Skeleton>
            </div>
            <div style={{margin: "0 7px"}}>
                <Skeleton variant="rect" width={480} height={330}></Skeleton>
                <Skeleton variant="text" width={300} height={50}></Skeleton>
                <Skeleton variant="text" width={220} height={15} style={{marginTop: "20px"}}></Skeleton>
                <Skeleton variant="text" width={90} height={15}></Skeleton>
                <Skeleton variant="text" height={60}></Skeleton>
            </div>
            <div style={{margin: "0 7px"}}>
                <Skeleton variant="rect" width={480} height={330}></Skeleton>
                <Skeleton variant="text" width={300} height={50}></Skeleton>
                <Skeleton variant="text" width={220} height={15} style={{marginTop: "20px"}}></Skeleton>
                <Skeleton variant="text" width={90} height={15}></Skeleton>
                <Skeleton variant="text" height={60}></Skeleton>
            </div>
            <div style={{margin: "0 7px"}}>
                <Skeleton variant="rect" width={480} height={330}></Skeleton>
                <Skeleton variant="text" width={300} height={50}></Skeleton>
                <Skeleton variant="text" width={220} height={15} style={{marginTop: "20px"}}></Skeleton>
                <Skeleton variant="text" width={90} height={15}></Skeleton>
                <Skeleton variant="text" height={60}></Skeleton>
            </div>
          </SkeletonContainer>
    )
  }
  return <Slider bestPlaceList={bestPlaceList}/>;
}

const mapStateToProps = state => ({
  bestPlaceList: state.home.bestPlaceList,
  isLoading: state.home.isLoading
});
const mapDispatchToProps = dispatch => ({
  requestBestPlaceList: () => dispatch({type: types.REQUEST_BEST_PLACE_LIST})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SliderContainer);
