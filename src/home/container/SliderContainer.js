import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import Slider from "../component/Slider";
import { actions } from "../../common/reducer/home";
import Skeleton from "@material-ui/lab/Skeleton";

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

function SkeletonCard() {
  return (
    <div style={{margin: "0 7px"}}>
      <Skeleton variant="rect" width={480} height={330}></Skeleton>
      <Skeleton variant="text" width={300} height={50}></Skeleton>
      <Skeleton variant="text" width={220} height={15} style={{marginTop: "20px"}}></Skeleton>
      <Skeleton variant="text" width={90} height={15}></Skeleton>
      <Skeleton variant="text" height={60}></Skeleton>
    </div>
  )
}

export default function SliderContainer() {

  const { bestPlaceList, isLoading } = useSelector(state => ({
    bestPlaceList: state.home.bestPlaceList,
    isLoading: state.home.isLoading,
  }))

  const dispatch = useDispatch();
  const requestBestPlaceList = React.useCallback(() => {
    dispatch(actions.requestBestPlaceList());
  }, [dispatch]);

  React.useEffect(() => {
    requestBestPlaceList();
  }, []);

  if (isLoading) {
    return (
          <SkeletonContainer>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </SkeletonContainer>
    )
  }
  return <Slider bestPlaceList={bestPlaceList}/>;
};