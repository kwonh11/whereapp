import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Avatar,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Modal from "../../common/component/Modal";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import UserPage from "../../user/page/UserPage";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#3f63bf",
    borderColor: "#3f63bf",
  },
});

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h6 {
    margin: 12px 0;
  }
`;

const UserInner = styled.div`
  display: flex;
  position: relative;
  height: 84px;
  width: 84px;
  margin-bottom: 10px;
  & div {
    width: 100%;
    height: 100%;
  }
  & .MuiButtonBase-root {
    position: absolute;
    background: #fff;
    box-shadow: 0 1px 1px 0 rgba(65, 69, 73, 0.3),
      0 1px 3px 1px rgba(65, 69, 73, 0.15);
    width: 34px;
    height: 34px;
    right: -10px;
    bottom: -10px;
  }
`;

const Menu = styled(Button)`
  &.MuiButtonBase-root {
    padding: 0 !important;
    font-size: 18px;
    padding: 10px 15px;
    width: 100%;
    & a {
      color: black;
      width: 100%;
      height: 100%;
      padding: 10px 15px;
      text-align: left;
    }
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 17px;
`;

export default function Login() {
  const [login, setLogin] = useState(true);
  const [on, setOn] = useState(false);

  const handleClick = () => {
    setLogin(!login);
  };

  const onClickClose = () => {
    setOn(!on);
  };

  const classes = useStyles();
  return (
    <>
      {login ? (
        <IconButton color="primary" component="span" onClick={onClickClose}>
          <Avatar></Avatar>
        </IconButton>
      ) : (
        <Button variant="outlined" color="primary" onClick={handleClick}>
          로그인 / 가입
        </Button>
      )}

      {on && (
        <Modal on={on} onClickClose={onClickClose}>
          <UserContainer>
            <UserInner>
              <Avatar></Avatar>
              <IconButton color="primary" component="span">
                <PhotoCamera />
              </IconButton>
            </UserInner>
            <Typography variant="subtitle1">email</Typography>
          </UserContainer>
          <Divider />
          <Menu color="primary" onClick={onClickClose}>
            <Link to="/user/scrap">스크랩</Link>
          </Menu>
          <Divider />
          <Menu color="primary" onClick={onClickClose}>
            <Link to="/user/comment">내 댓글</Link>
          </Menu>
          <Divider />
          <BtnWrap>
            <Button variant="outlined" color="primary" onClick={handleClick}>
              로그아웃
            </Button>
          </BtnWrap>
        </Modal>
      )}
    </>
  );
}
