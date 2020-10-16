import { useState, useEffect } from "react";
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

  useEffect(() => {
    initChat();
  }, []);

  //채팅방 초기화
  const initChat = async () => {
    const res = await axios.get("/chat");
    setUser(res.data.user);

    const newChatList = [...chat, ...res.data.chats];
    setChat(newChatList);
  };

  const handleClick = () => {
    if (!visual) {
      socket.emit("join");
    }
    setVisual(!visual);
  };

  const handleClickSubmit = () => {
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
    />
  );
}
