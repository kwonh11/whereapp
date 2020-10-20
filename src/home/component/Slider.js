import styled, { css } from "styled-components";
import PlaceCard from "../../common/component/Card";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import device from "../../common/device";

const SliderContainer = styled.div`
  width: 100%;
  height: 105%;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 80px;
  position: relative;
  background-color: #f1f1f1;
  padding-bottom: 150px;
  opacity: ${(props) => (props.fade === "in" ? 1 : 0.3)};
  transition: opacity 0.3s ease-out;
  @media ${device.tablet} {
    overflow: auto;
  } ;
`;
const CardContainer = styled.div`
  width: 100%;
  height: 105%;
  position: relative;
  left: ${(props) => props.active * -495}px;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: all 0.3s ease-out;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    display: none;
  } ;
`;
const ArrowHoverAction = css`
  &:hover {
    cursor: pointer;
    background: black;
    font-size: 85;
    color: white;
    opacity: 0.55;
    box-shadow: 16px 18px 28px -3px rgba(143, 143, 143, 0.75);
  }
`;
const PrevArrow = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  color: #c1c1c1;
  opacity: ${(props) => (props.visible === "none" ? 0 : 0.75)};
  width: 100px;
  height: 505px;
  z-index: ${(props) => (props.visible === "none" ? -10 : 10)};
  transition: all 0.3s ease-out;
  ${(props) => (props.visible === "none" ? "" : ArrowHoverAction)};
`;
const NextArrow = styled(PrevArrow)`
  ${(props) => (props.visible === "none" ? "" : ArrowHoverAction)};
`;

export default function Slider(props) {
  const { bestPlaceList, isLoading } = props;
  const [active, setActive] = React.useState(0);
  const [fade, setFade] = React.useState(false);
  const [cardsPerPage, setCardsPerPage] = React.useState(1);

  const max = React.useMemo(() => bestPlaceList.length - 1, [bestPlaceList]);

  React.useEffect(() => {
    setTimeout(() => setFade(true), 200);
  }, [isLoading]);
  React.useEffect(() => {
    setCardsPerPage(Math.floor(document.documentElement.clientWidth / 495));
  }, [document.documentElement.clientWidth]);

  const handleClickPrev = () => {
    const index = active - cardsPerPage > 0 ? active - cardsPerPage : 0;
    setActive(index);
  };
  const handleClickNext = () => {
    const index = active + cardsPerPage < max ? active + cardsPerPage : max;
    setActive(index);
  };

  return (
    <SliderContainer device={"web"} fade={fade ? "in" : "out"}>
      <ArrowContainer device={"web"}>
        <PrevArrow
          visible={active <= 0 ? "none" : ""}
          onClick={handleClickPrev}
        >
          <ArrowBackIosOutlined style={{ fontSize: 75 }} />
        </PrevArrow>
        <NextArrow
          visible={active + cardsPerPage >= max ? "none" : ""}
          onClick={handleClickNext}
        >
          <ArrowForwardIosOutlined style={{ fontSize: 75 }} />
        </NextArrow>
      </ArrowContainer>
      <CardContainer active={active} page={cardsPerPage}>
        {bestPlaceList.map((place, index) => {
          return (
            <PlaceCard
              key={index}
              place={{
                dist: place.dist,
                isClose: place.dist <= 1000,
                isPopular: place.readcount >= 3000,
                isOnline: place.addr1.includes("온라인"),
                ...place,
              }}
            />
          );
        })}
      </CardContainer>
    </SliderContainer>
  );
}
