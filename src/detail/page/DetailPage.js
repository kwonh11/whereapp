import DetailContainer from "../container/DetailContainer";
import styled from "styled-components";

const DetailPageContainer = styled.section``;

export default function DetailPage({ match }) {
  console.log(`id : ${match.params.id}`);
  return (
    <DetailPageContainer>
      <DetailContainer />
    </DetailPageContainer>
  );
}
