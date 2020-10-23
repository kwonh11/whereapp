import { useState, useEffect, useLayoutEffect } from "react";
import Chat from "../component/Chat";
import socketio from "socket.io-client";
import axios from "axios";
import { actions } from "../../common/reducer/chat";
import { useDispatch, useSelector } from "react-redux";

const io = socketio.connect("http://localhost:8000");

export default function ChatContainer() {
  const { chatList, user } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const [visual, setVisual] = useState(false);
  const [input, setInput] = useState("");

  const listRef = React.useRef();

  useLayoutEffect(() => {
    fixScroll();
  }, [chatList]);

  // 스크롤 하단 고정
  const fixScroll = () => {
    const elem = listRef.current;
    if (elem) elem.scrollTop = elem.scrollHeight;
  };

  const handleClick = () => {
    fixScroll();
    setVisual(!visual);
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    io.emit("chatmessage", input);
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
      listRef={listRef}
    />
  );
}
