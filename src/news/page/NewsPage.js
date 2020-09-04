import CorpCategoryContainer from '../container/CorpCategoryContainer';
import styled from 'styled-components';

// 임시 테스트용 컨테이너
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function NewsPage() {
    return (
        <Container>
            <CorpCategoryContainer />
        </Container>
    )
}