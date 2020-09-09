import { useState } from "react";
import { Button, Avatar } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    margin-left: 5px;
  }
`;

export default function Login() {
  const [login, setLogin] = useState(false);

  const handleClick = () => {
    setLogin(!login);
  };

  return login ? (
    <LogoutContainer>
      <Avatar>
        <Link to="/user">
          <PersonIcon />
        </Link>
      </Avatar>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        로그아웃
      </Button>
    </LogoutContainer>
  ) : (
    <Button variant="outlined" color="primary" onClick={handleClick}>
      로그인 / 가입
    </Button>
  );
}
