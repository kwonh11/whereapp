import styled, { css } from "styled-components";
import ItemCard from "./Card";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

const SliderContainer = styled.div`
  width: 100%;
  height: 105%;
  overflow: hidden;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 80px;
  position: relative;
`;
const CardContainer = styled.div`
  width: 100%;
  height: 105%;
  position: relative;
  left: ${(props) => props.active * -344}px;
  padding-bottom:5px;
  display: flex;
  justify-content: start;
  align-items: center;
  transition: all 0.3s ease-out;
`;
const ArrowContainer = styled.div`
  position: absolute;
  width: 100%;
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
  height: 440px;
  z-index: ${(props) => (props.visible === "none" ? -10 : 10)};
  transition: all 0.3s ease-out;
  ${(props) => (props.visible === "none" ? "" : ArrowHoverAction)};
`;
const NextArrow = styled(PrevArrow)`
  ${(props) => (props.visible === "none" ? "" : ArrowHoverAction)};
`;

export default function Slider(props) {
  const { items } = props;
  const [active, setActive] = React.useState(0);
  const [cardsPerPage, setCardsPerPage] = React.useState(1);
  const max = React.useCallback(() => items.length - 1, [items]);
  React.useEffect(()=>{
    setCardsPerPage(Math.floor(document.documentElement.clientWidth / 337));
  },[document.documentElement.clientWidth]);
  console.log(items.length);
  const onClickPrev = () => {
    setActive(active - cardsPerPage > 0 ? active - cardsPerPage : 0);
  };
  const onClickNext = (max) => {
    setActive(active + cardsPerPage < max ? active + cardsPerPage : max);
  };
  return (
    <SliderContainer device={"web"}>
      <ArrowContainer device={"web"}>
        <PrevArrow visible={active <= 0 ? "none" : ""} onClick={onClickPrev}>
          <ArrowBackIosOutlined style={{ fontSize: 75 }} />
        </PrevArrow>
        <NextArrow
          visible={active >= max() ? "none" : ""}
          onClick={() => onClickNext(max())}
        >
          <ArrowForwardIosOutlined style={{ fontSize: 75 }} />
        </NextArrow>
      </ArrowContainer>
      <CardContainer active={active} page={cardsPerPage}>
        {/* testNews는 이 후 saga->api->store 를 통해 전달된 response에 따라 변경*/}
        {items.map((item, index) => {
          return <ItemCard key={index} {...item} />;
        })}
      </CardContainer>
    </SliderContainer>
  );
}
