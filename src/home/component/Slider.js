import styled, { css } from "styled-components";
import NewsCard from "./Card";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

const SliderContainer = styled.div`
  /* width: ${(props) =>
    props.device === "web" ? "calc(990px + 75px)" : ""}; */
  width: 100%;
  height: ${(props) => props.height};
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10vh 0;
  padding: 0;
  position: relative;
`;
const CardContainer = styled.div`
  width: 100%;
  height: 110%;
  position: relative;
  left: ${(props) => props.active * -360}px;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: all 0.3s ease-out;
`;
const ArrowContainer = styled.div`
  position: absolute;
  width: 100%;
  /* width: ${(props) =>
    props.device === "web" ? "calc(990px + 60px)" : ""}; */
  /* margin-left: 15px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  height: 500px;
  z-index: ${(props) => (props.visible === "none" ? -10 : 10)};
  transition: all 0.3s ease-out;
  ${(props) => (props.visible === "none" ? "" : ArrowHoverAction)};
`;
const NextArrow = styled(PrevArrow)`
  ${(props) => (props.visible === "none" ? "" : ArrowHoverAction)};
`;

export default function Slider(props) {
  const { cardWidth, testNews } = props;
  const max = React.useCallback(() => testNews.length - 2, [testNews]);
  const [active, setActive] = React.useState(0);
  const cardContainerRef = React.useRef();

  const onClickPrev = () => {
    setActive(active - 1 > -1 ? active - 1 : -1);
  };
  const onClickNext = (max) => {
    setActive(active + 1 < max + 1 ? active + 1 : max + 1);
  };
  return (
    // <SliderContainer device={"web"} height="65vh">
    <SliderContainer device={"web"} height="110%">
      <ArrowContainer device={"web"}>
        <PrevArrow visible={active <= -1 ? "none" : ""} onClick={onClickPrev}>
          <ArrowBackIosOutlined style={{ fontSize: 75 }} />
        </PrevArrow>
        <NextArrow
          visible={active >= max() ? "none" : ""}
          onClick={() => onClickNext(max())}
        >
          <ArrowForwardIosOutlined style={{ fontSize: 75 }} />
        </NextArrow>
      </ArrowContainer>
      <CardContainer ref={cardContainerRef} active={active}>
        {/* testNews는 이 후 saga->api->store 를 통해 전달된 response에 따라 변경*/}
        {testNews.map((item, index) => {
          return <NewsCard key={index} {...item} />;
        })}
      </CardContainer>
    </SliderContainer>
  );
}
