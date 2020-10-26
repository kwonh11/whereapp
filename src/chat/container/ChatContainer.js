import { useState, useLayoutEffect, useCallback, useEffect } from "react";
import Chat from "../component/Chat";
import { useDispatch, useSelector } from "react-redux";
import { actions } from '../../common/reducer/chat';
import { actions as homeActions } from "../../common/reducer/home";

export default function ChatContainer() {
  const [visual, setVisual] = useState(false);
  const [input, setInput] = useState("");
  const listRef = React.useRef();
  
  useLayoutEffect(() => {
    fixScroll();
  }, [chatList]);
  useEffect(() => {
    if(visual) handleJoinChat();
  }, [visual]);

  const { nick, _id: userId } = useSelector((state) => state.user.info);
  const { isLoggedIn } = useSelector((state) => state.user);
  const { chatList } = useSelector((state) => state.chat);

  const dispatch = useDispatch();
  
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
  const handleJoinChat = React.useCallback(() => {
    dispatch(actions.joinChat(nick));
  },[dispatch, nick]);

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch(actions.submitMessage({nick, userId, message: input}));
    setInput("");
  };
  // 스크롤 하단 고정
  const fixScroll = () => {
    const elem = listRef.current;
    if (elem) elem.scrollTop = elem.scrollHeight;
  };

  const handleClick = () => {
    if (!isLoggedIn) {
      setSnackContent("로그인 후 이용해주세요");
      setSnackOpen(true);
      return;
    };
    fixScroll();
    setVisual(!visual);
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <Chat
      visual={visual}
      handleClick={handleClick}
      handleChangeInput={handleChangeInput}
      handleClickSubmit={handleSubmitMessage}
      chatList={chatList}
      input={input}
      nick={nick}
      userId={userId}
      listRef={listRef}
    />
  );
}
