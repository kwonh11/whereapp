import styled from "styled-components";
import { Paper } from "@material-ui/core";
import DetailContainer from "../container/DetailContainer";
import AdditionalContainer from "../container/AdditionalContainer";
import CommentsContainer from "../container/CommentsContainer";
import device from "../../common/device";

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 100px;
  margin-top: 100px;
  @media ${device.laptopL} {
    padding: 0 50px;
  }
  @media ${device.tablet} {
    padding: 0;
  }
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
