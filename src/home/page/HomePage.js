import CategoryContainer from '../container/CategoryContainer';
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 150px;
`;
const FilterWrap = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;
export default function HomePage() {
  return (
    <Container>
      <CategoryContainer />
    </Container>
  );
}
