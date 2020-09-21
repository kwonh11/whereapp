import styled from "styled-components";
import { Link } from "react-router-dom";
import LoginBtn from "./LoginBtn";
import { Button } from "@material-ui/core";
import LogoImage from "../../images/logo.png";

const Container = styled.nav`
  height: 70px;
  width: 100vw;
  box-shadow: rgb(238, 238, 238) 0px 1px 0px 0px;
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
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
const RightItem = styled.ul`
  display: flex;
  & li {
    margin-right: 10px;
    display: flex;
    align-items: center;
    /* & + & {
      margin-right: 10px;
    } */
    & a {
      color: rgb(40, 42, 53);
    }
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

export default function GNB() {
  return (
    <Container>
      <Inner>
        <RightItem>
          <li>
            <Link to="/">
              <Logo image={LogoImage} />
            </Link>
          </li>
          <li>
            <Link to="/news">언론사별 보기</Link>
          </li>
          <li>
            <Link to="/news">속보</Link>
          </li>
        </RightItem>
        <div>
          <LoginBtn />
        </div>
      </Inner>
    </Container>
  );
}
