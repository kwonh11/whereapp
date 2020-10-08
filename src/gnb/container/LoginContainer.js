import { useEffect, useState } from "react";
import LoginBtn from "../component/LoginBtn";
import { actions } from "../../common/reducer/user";

export default function LoginContainer(props) {
  console.log("LoginContainer");

  const [loginModal, setLoginModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

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
    <LoginBtn
      handleAddFile={handleAddFile}
      handleClickInfoModal={handleClickInfoModal}
      handleClickLoginModal={handleClickLoginModal}
      loginModal={loginModal}
      infoModal={infoModal}
    />
  );
}
