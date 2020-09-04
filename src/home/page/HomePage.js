import CategoryContainer from "../container/CategoryContainer";
import DateContainer from "../container/DateContainer";
import LoginContainer from "../container/LoginContainer";
import SearchContainer from "../container/SearchContainer";
import SliderContainer from '../container/SliderContainer';
import styled from 'styled-components';
import getRssUrl from '../../common/getRssUrl';

// 임시 테스트용 컨테이너
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function HomePage() {
  getRssUrl();
  return (
    <Container>
      <SearchContainer />
      <LoginContainer />  
      <DateContainer />
      <CategoryContainer />
      <SliderContainer />
    </Container>
  );
}
