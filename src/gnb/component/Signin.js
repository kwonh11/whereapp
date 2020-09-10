import {Button} from '@material-ui/core';
import styled from 'styled-components';
import googleLoginImage from '../../images/google_login_button.png';
import kakaoLoginImage from '../../images/kakao_login_button.png';

const SignInContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: -50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .MuiButton-root {
        margin: 2px;
    }
`;
const StyledButton = styled(Button)`
    width: 350px;
    height: 80px;
    margin: 5px;
    padding: 5px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const TitleContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 1.5rem;
    color: #676767;
    font-weight: bold;
`;

export default function SignIn() {
    return (
        <SignInContainer>
            <TitleContainer>
                [작은로고] 다음 계정으로 로그인
            </TitleContainer>
            <StyledButton image={googleLoginImage}/>
            <StyledButton image={kakaoLoginImage}/>
        </SignInContainer>
    )
}