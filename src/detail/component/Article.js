import styled from "styled-components";
import { Paper } from "@material-ui/core";
import IconBox from "../../common/component/Icon";
import Comments from './Comments';
//test 중
import {callApiScrap} from '../../common/api';

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

  // redux 구현 후 article 매개변수를 redux store를 통해 정확한 데이터로 넘겨줘야함  const testHandleOnClickScrap = () => {
  const testHandleOnClickScrap = (article) => {
    callApiScrap(article).catch(err =>console.log(err));
  };

  return (
    <AricleContainer elevation={3}>
      <IconBox
        size="100px"
        margin="10px"
        name={news.corp}
        border="1px solid"
      />
      <img src={news.image} />
      <p>{news.description}</p>
      <Comments onScrap={testHandleOnClickScrap}/>
    </AricleContainer>
  );
}
