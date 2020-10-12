import { useEffect, useState } from "react";
import LoginBtn from "../component/LoginBtn";
import { actions } from "../../common/reducer/user";
import { useSelector, useDispatch } from "react-redux";

export default function LoginContainer() {
  console.log("LoginContainer");

  const [loginModal, setLoginModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  const dispatch = useDispatch();
  const { isLoggedIn, info } = useSelector((state) => state.user);

  useEffect(() => {
    if (isLoggedIn) return;     
      console.log(isLoggedIn)
    dispatch(actions.loginInRequest());
      
  
  }, [dispatch, isLoggedIn]);

  const handleClickLoginModal = () => {
    setLoginModal(!loginModal);
  };

  const handleClickInfoModal = () => {
    setInfoModal(!infoModal);
  };

  const handleGetComments = () => {
    dispatch(actions.getCommentsRequest())
  }

  const handleAddFile = (e) => {
    const formData = new FormData();
    formData.append("img", e.target.files[0]);
    dispatch(actions.uploadImageRequest(formData));
  };

  return (
    <LoginBtn
      handleAddFile={handleAddFile}
      handleClickInfoModal={handleClickInfoModal}
      handleClickLoginModal={handleClickLoginModal}
      loginModal={loginModal}
      infoModal={infoModal}
      user={info}
      isLoggedIn={isLoggedIn}
      handleGetComments={handleGetComments}
    />
  );
}
