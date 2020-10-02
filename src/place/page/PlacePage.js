import styled from "styled-components";
import PlaceContainer from "../container/PlaceContainer";
import qs from "qs";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function PlacePage() {

  return (
    <Container>
      <PlaceContainer />
    </Container>
  );
}
