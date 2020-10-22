import { useState, useEffect, useLayoutEffect } from "react";
import Chat from "../component/Chat";
import io from "socket.io-client";
import axios from "axios";

export default function ChatContainer() {
  console.log("==========ChatContainer");
  let socket = io.connect("http://localhost:8000", {
    path: "/socket.io",
  });

  socket.on("chat", function (data) {
    const newChatList = [...chat, data];
    setChat(newChatList);
  });

  const [visual, setVisual] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [user, setUser] = useState("");

  const listRef = React.useRef();

  useEffect(() => {
    initChat();
  }, []);
  useLayoutEffect(() => {
    fixScroll();
  },[chat]);

  // 스크롤 하단 고정
  const fixScroll = () => {
    const elem = listRef.current;
    if (elem) elem.scrollTop = elem.scrollHeight;
  }
  //채팅방 초기화
  const initChat = async () => {
    const res = await axios.get("/chat");
    setUser(res.data.user);

    const newChatList = [...chat, ...res.data.chats];
    setChat(newChatList);
  };

  const handleClick = () => {
    fixScroll();
    if (!visual) {
      socket.emit("join");
    }
    setVisual(!visual);
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    setInput("");
    axios.post("/chat", { input });
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
      chat={chat}
      input={input}
      user={user}
      listRef={listRef}
    />
  );
}
