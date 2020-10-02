import styled from "styled-components";
import { Paper } from '@material-ui/core';
import DetailContainer from "../container/DetailContainer";
import AdditionalContainer from '../container/AdditionalContainer';
import CommentsContainer from '../container/CommentsContainer';

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1300px;
  position: relative;
  padding: 30px;
  margin-top: 100px;
`;

export default function DetailPage() {

  return (
    <Container>
      <DetailContainer />
      <AdditionalContainer />
      <CommentsContainer />
    </Container>
  );
}
