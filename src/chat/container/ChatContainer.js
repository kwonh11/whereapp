import { useState, useLayoutEffect, useCallback } from "react";
import Chat from "../component/Chat";
import { useDispatch, useSelector } from "react-redux";
import { actions } from '../../common/reducer/chat';
import { message } from "antd";

export default function ChatContainer() {
  const [visual, setVisual] = useState(false);
  const [input, setInput] = useState("");
  const listRef = React.useRef();
  
  useLayoutEffect(() => {
    fixScroll();
  }, [chatList]);
  
  const { nick, _id: userId } = useSelector((state) => state.user.info);
  const { chatList } = useSelector((state) => state.chat);

  const dispatch = useDispatch();
  const handleSubmitMessage = (e) => {
    e.preventDefault();
    dispatch(actions.submitMessage({nick, userId, message: input}));
    setInput("");
  };
  // 스크롤 하단 고정
  const fixScroll = () => {
    const elem = listRef.current;
    if (elem) elem.scrollTop = elem.scrollHeight;
  };

  const handleClick = () => {
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
