import styled from 'styled-components';
import Loading from '../../images/loading.gif';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default function Progress () {
    return (
        <Container>
            <img src={Loading} alt='Loading...' width='200px' height='150px' />
        </Container>
    )
}