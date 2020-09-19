import CategoryContainer from "../container/CategoryContainer";
import DateContainer from "../container/DateContainer";
import LocationContainer from "../container/LocationContainer";
import SliderContainer from "../container/SliderContainer";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 75px;
`;
const FilterWrap = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;
// const ContentsWrap = styled.div`
//   display: flex;
//   height: 440px;
//   align-items: center;
// `;

export default function HomePage() {
  return (
    <Container>
      {/* <ContentsWrap>
        <SliderContainer />
      </ContentsWrap> */}
      <FilterWrap>
        <LocationContainer />
      </FilterWrap>
    </Container>
  );
}
