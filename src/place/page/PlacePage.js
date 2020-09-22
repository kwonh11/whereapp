import CorpCategoryContainer from "../container/CorpCategoryContainer";
import styled from "styled-components";
import NewsContainer from "../container/PlaceContainer";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NewsPage() {
  return (
    <Container>
      <NewsContainer />
    </Container>
  );
}
