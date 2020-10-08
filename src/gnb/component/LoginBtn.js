import { useState, useEffect } from "react";
import { Button, Typography, Divider, IconButton } from "@material-ui/core";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Modal from "../../common/component/Modal";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SignIn from "./Signin";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../common/reducer/user";

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
  margin-bottom: 8px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  & .MuiButtonBase-root {
    position: absolute;
    background: #fff;
    box-shadow: 0 1px 1px 0 rgba(65, 69, 73, 0.3),
      0 1px 3px 1px rgba(65, 69, 73, 0.15);
    width: 34px;
    height: 34px;
    right: -8px;
    bottom: -8px;
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

const Avatar = styled(IconButton)`
  ${(props) =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-size: 60px 60px;
      background-repeat: no-repeat;
      border-radius: 50%;
      width: 60px;
      height: 60px;
    `}
`;

export default function Login() {
  const [loginModal, setLoginModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [userInfo, setUserInfo] = useState(null); //ㄴㄴ

  const dispatch = useDispatch();
  const { isLoggedIn, info } = useSelector((state) => state.user);

  useEffect(() => {
    console.log("------BTN useEffect");
    console.log(info);

    if (isLoggedIn) return;
    dispatch(actions.loginInRequest());
  }, [dispatch, isLoggedIn]);

  const handleClickLoginModal = () => {
    setLoginModal(!loginModal);
  };

  const handleClickInfoModal = () => {
    setInfoModal(!infoModal);
  };

  const handleAddFile = (e) => {
    const formData = new FormData();
    formData.append("img", e.target.files[0]);
    dispatch(actions.uploadImageRequest(formData));
  };

  return (
    <>
      {isLoggedIn ? (
        <Avatar onClick={handleClickInfoModal} image={info.image} />
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickLoginModal}
        >
          로그인 / 가입
        </Button>
      )}

      {loginModal && (
        <Modal on={loginModal} onClickClose={handleClickLoginModal}>
          <SignIn />
        </Modal>
      )}

      {infoModal && (
        <Modal on={infoModal} onClickClose={handleClickInfoModal}>
          <UserContainer>
            <UserInner>
              <img src={info.image} />
              <input
                accept="image/*"
                style={{ display: "none" }}
                type="file"
                id="img"
                name="img"
                onChange={handleAddFile}
              />
              <label htmlFor="img">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </UserInner>
            <Typography variant="subtitle1">{info.nick}</Typography>
          </UserContainer>
          <Divider />
          <Menu color="primary">
            <Link to="/user/scrap">스크랩</Link>
          </Menu>
          <Divider />
          <Menu color="primary">
            <Link to="/user/comment">내 댓글</Link>
          </Menu>
          <Divider />
          <BtnWrap>
            <a href="/auth/logout">
              <Button variant="outlined" color="primary">
                로그아웃
              </Button>
            </a>
          </BtnWrap>
        </Modal>
      )}
    </>
  );
}
