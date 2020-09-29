import styled from "styled-components";
import PlaceContainer from "../container/PlaceContainer";
import qs from "qs";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function PlacePage({ location, match }) {
  console.log("PlacePage");

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Container>
      <PlaceContainer query={query} match={match} />
    </Container>
  );
}
