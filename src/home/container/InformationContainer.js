import Information from '../component/Information';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { actions } from "../../common/reducer/home";

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  top: -180px;
`;


export default function InformationContainer(props) {

    const regionCode = useSelector(state => state.home.regionCode);
    const address = useSelector(state => state.location.address );

    const dispatch = useDispatch();
    const setRegionCode = React.useCallback((region) => {
        dispatch(actions.setRegionCode(region));
    }, [dispatch]);

    const handleChangeRegionCode = (e, value) => {
        if (!value) return;
        setRegionCode(value.code);
        // requestBestPlaceList();
    }
    return (
        <Container>
            <Information address={address} regionCode={regionCode} handleChangeRegionCode={handleChangeRegionCode} />
        </Container>
    )
}