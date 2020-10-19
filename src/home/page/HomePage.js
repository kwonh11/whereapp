import CategoryContainer from '../container/CategoryContainer';
import InformationContainer from '../container/InformationContainer';
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;
export default function HomePage() {
  return (
    <Container>
      <InformationContainer />
      <CategoryContainer />
    </Container>
  );
}
