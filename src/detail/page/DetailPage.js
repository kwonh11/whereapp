import ArticleContainer from "../container/ArticleContainer";
import styled from "styled-components";

const DetailPageContainer = styled.section``;

export default function DetailPage({ match }) {
  console.log("DetailPage");
  const { id } = match.params;
  return (
    <DetailPageContainer>
      <ArticleContainer id={id} />
    </DetailPageContainer>
  );
}
