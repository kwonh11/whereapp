import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import LogoImage from "../../images/logo.png";
import LoginContainer from "./LoginContainer";
import SearchContainer from "./SearchContainer";

const Container = styled.nav`
  height: 70px;
  width: 100vw;
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 80.8%, 0.5);
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Inner = styled.div`
  width: 1300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const RightItem = styled.div`
  display: flex;
  & form {
    margin-right: 20px;
  }
`;
const Logo = styled(Button)`
  width: 100px;
  height: 50px;
  margin-right: 15px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function GNBContainer() {
  return (
    <Container>
      <Inner>
        <Link to="/">
          <Logo image={LogoImage} />
        </Link>
        <RightItem>
          <SearchContainer />
          <LoginContainer />
        </RightItem>
      </Inner>
    </Container>
  );
}
