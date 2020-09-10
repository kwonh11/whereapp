import styled from "styled-components";
import { Paper } from "@material-ui/core";
import IconBox from "../../common/component/Icon";
import Comments from './Comments';

const AricleContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  position: relative;
  & img {
    margin-bottom: 20px;
  }
`;

export default function Detail({ news }) {
  return (
    <AricleContainer elevation={3}>
      <IconBox
        size="100px"
        margin="10px"
        name={news.company}
        border="1px solid"
      />
      <img src={news.image} />
      <p>{news.description}</p>
      <Comments />
    </AricleContainer>
  );
}
