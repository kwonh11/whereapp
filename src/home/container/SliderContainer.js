import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Slider from "../component/Slider";
import { actions } from "../../common/reducer/home";
import Skeleton from "@material-ui/lab/Skeleton";
import device from "../../common/device";

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
const SkeletonCardWrapper = styled.div`
  margin: 0 7px;
  @media ${device.tablet} {
    & .MuiSkeleton-rect {
      width: 350px !important;
      height: 231px !important;
    }
  }
`;
function SkeletonCard() {
  return (
    <SkeletonCardWrapper>
      <Skeleton variant="rect" width={480} height={330}></Skeleton>
      <Skeleton variant="text" width={300} height={50}></Skeleton>
      <Skeleton
        variant="text"
        width={220}
        height={15}
        style={{ marginTop: "20px" }}
      ></Skeleton>
      <Skeleton variant="text" width={90} height={15}></Skeleton>
      <Skeleton variant="text" height={60}></Skeleton>
    </SkeletonCardWrapper>
  );
}

export default function SliderContainer() {
  const { bestPlaceList, isLoading, regionCode } = useSelector(
    (state) => state.home
  );
  const { origin, isHandledAddress } = useSelector((state) => state.location);

  const dispatch = useDispatch();
  const requestBestPlaceList = React.useCallback(
    (regionCode) => {
      dispatch(
        actions.requestBestPlaceList({ regionCode, isHandledAddress, origin })
      );
    },
    [dispatch]
  );

  React.useEffect(() => {
    requestBestPlaceList(regionCode);
  }, [regionCode]);

  if (isLoading) {
    return (
      <SkeletonContainer>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </SkeletonContainer>
    );
  }
  return <Slider bestPlaceList={bestPlaceList} />;
}
