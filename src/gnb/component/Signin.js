import { Button } from "@material-ui/core";
import styled from "styled-components";
import googleLoginImage from "../../images/google_login_button.png";
import kakaoLoginImage from "../../images/kakao_login_button.png";
import smallLogo from "../../images/smallLogo.png";

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
  align-items: center;
  font-size: 1.5rem;
  color: #676767;
  font-weight: bold;
  margin-bottom: 30px;
`;
const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export default function SignIn() {
  return (
    <SignInContainer>
      <TitleContainer><ImageWrapper image={smallLogo}/> 다음 계정으로 로그인</TitleContainer>
      <a href="/auth/google">
        <StyledButton image={googleLoginImage} />
      </a>
      <a href="/auth/kakao">
        <StyledButton image={kakaoLoginImage} />
      </a>
    </SignInContainer>
  );
}
