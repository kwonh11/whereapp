import DetailContainer from "../container/DetailContainer";
import styled from "styled-components";

const DetailPageContainer = styled.section``;

export default function DetailPage({ match }) {
  console.log(`id : ${match.params.contentId}`);
  return (
    <DetailPageContainer>
      <DetailContainer />
    </DetailPageContainer>
  );
}
