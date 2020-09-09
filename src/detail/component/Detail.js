import Comments from './Comments';
import styled from 'styled-components';

// test
const DetailWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function Detail() {
  return (
    <DetailWrap>
      <Comments />
    </DetailWrap>
  )
}
