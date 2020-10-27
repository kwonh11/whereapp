import { useState, useLayoutEffect, useCallback, useEffect } from "react";
import Chat from "../component/Chat";
import { actions } from "../../common/reducer/chat";
import { useDispatch, useSelector } from "react-redux";
import { actions as homeActions } from "../../common/reducer/home";

export default function ChatContainer() {
  const { chatList, user, count } = useSelector((state) => state.chat);
  const { isLoggedIn, info } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [visual, setVisual] = useState(false);
  const [input, setInput] = useState("");
  const listRef = React.useRef();

  useLayoutEffect(() => {
    fixScroll();
  }, [chatList]);

  const setSnackOpen = React.useCallback(
    (snackOpen) => {
      dispatch(homeActions.setSnackOpen(snackOpen));
    },
    [dispatch]
  );
  const setSnackContent = React.useCallback(
    (snackContent) => {
      dispatch(homeActions.setSnackContent(snackContent));
    },
    [dispatch]
  );
  const handleClick = () => {
    if (!isLoggedIn) {
      setSnackContent("로그인 후 이용해주세요");
      setSnackOpen(true);
      return;
    }
    visual
      ? dispatch(actions.setDisconnectRequest())
      : dispatch(actions.setConnectRequest());
    setVisual(!visual);
  };
  const fixScroll = () => {
    const elem = listRef.current;
    console.log(elem);
    if (elem) elem.scrollTop = elem.scrollHeight;
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(actions.submitChatRequest(input));
    }
    setInput("");
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <Chat
      visual={visual}
      handleClick={handleClick}
      handleChangeInput={handleChangeInput}
      handleClickSubmit={handleClickSubmit}
      chatList={chatList}
      input={input}
      user={user}
      count={count}
      info={info}
      ref={listRef}
    />
  );
}
