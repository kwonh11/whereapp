import CategoryContainer from "../container/CategoryContainer";
import DateContainer from "../container/DateContainer";
import SearchContainer from "../container/SearchContainer";
import SliderContainer from "../container/SliderContainer";
import styled from "styled-components";

const Container = styled.section`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;
const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;
const ContentsWrap = styled.div`
  display: flex;
  height: 500px;
  align-items: center;
`;

export default function HomePage() {
  return (
    <Container>
      <FilterWrap>
        <DateContainer />
        <SearchContainer />
      </FilterWrap>
      <ContentsWrap>
        <CategoryContainer />
        <SliderContainer />
      </ContentsWrap>
    </Container>
  );
}
