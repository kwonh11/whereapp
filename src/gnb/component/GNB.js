import styled from "styled-components";
import { Link } from "react-router-dom";
import Login from "./Login";

const Container = styled.nav`
  height: 70px;
  width: 100vw;
  box-shadow: rgb(238, 238, 238) 0px 1px 0px 0px;
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
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
    /* & + & {
      margin-right: 10px;
    } */
    & a {
      color: rgb(40, 42, 53);
    }
  }
`;

export default function GNB() {
  return (
    <Container>
      <Inner>
        <RightItem>
          <li>
            <Link to="/">로고</Link>
          </li>
          <li>
            <Link to="/news">언론사별 보기</Link>
          </li>
          <li>
            <Link to="/news">속보</Link>
          </li>
        </RightItem>
        <div>
          <Login />
        </div>
      </Inner>
    </Container>
  );
}
