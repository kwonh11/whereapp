import LocationButton from '../component/LocationButton';
import TestAPIButton from '../component/TestAPIButton';
import styled from 'styled-components';
import {getUsersLocation} from '../../common/api';

const TestButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default function LocationContainer() {
    React.useEffect(()=>{
        getUsersLocation();
    },[])
    return (
        <TestButtonsContainer>
            <LocationButton onClickLocation={getUsersLocation}/>
            <TestAPIButton />
        </TestButtonsContainer>
    )
}