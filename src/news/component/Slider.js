import styled from "styled-components";
import NewsCard from "./Card";

const SliderContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArrowContainer = styled.div`
  position: absolute;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ArrowLeft = styled.span``;
const ArrowRight = styled.span``;
export default function Slider(props) {
  // 렌더 속성값 패턴으로 chlidren 속성에 Array타입의 Card들이 입력됨
  // 항상 0부터 시작, 넘김 간격 5초
  const [active, setActive] = React.useState(0);
  const { children } = props;
  const totalCount = children.length;

  console.log(children);
  return (
    <SliderContainer width="70vw" height="50vh">
      <CardContainer>
        <ArrowContainer>
          <span>A</span>
          <ArrowRight></ArrowRight>
        </ArrowContainer>
        {children.map((item, index) => {
          return (
            <NewsCard
              key={index}
              {...item}
              active={index === active}
              pendingLeft={index === active - 1 || totalCount - 1}
              pendingRight={index === active + 1 || 0}
            />
          );
        })}
      </CardContainer>
    </SliderContainer>
  );
}
