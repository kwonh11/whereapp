import { useState, useEffect, useLayoutEffect } from "react";
import Chat from "../component/Chat";
import io from "socket.io-client";
import axios from "axios";
import { actions } from "../../common/reducer/chat";
import { useDispatch, useSelector } from "react-redux";

export default function ChatContainer() {
  console.log("==========ChatContainer");
  // let socket = io.connect("http://localhost:8000", {
  //   path: "/socket.io",
  // });

  // socket.on("chat", function (data) {
  //   const newChatList = [...chat, data];
  //   setChat(newChatList);
  // });

  const { chatList, user } = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  const [visual, setVisual] = useState(false);
  const [input, setInput] = useState("");
  // const [chat, setChat] = useState([]);
  // const [user, setUser] = useState("");

  const listRef = React.useRef();

  useEffect(() => {
    initChat();
  }, []);
  useLayoutEffect(() => {
    fixScroll();
  }, [chatList]);

  // 스크롤 하단 고정
  const fixScroll = () => {
    const elem = listRef.current;
    if (elem) elem.scrollTop = elem.scrollHeight;
  };
  //채팅방 초기화
  const initChat = async () => {
    const res = await axios.get("/chat");
    // setUser(res.data.user);

    const newChatList = [...chatList, ...res.data.chats];
    // setChat(newChatList);
  };

  const handleClick = () => {
    fixScroll();
    if (!visual) {
      console.log("actions.setConnectRequest()");
      // socket.emit("join");
      dispatch(actions.setConnectRequest());
    }
    setVisual(!visual);
  };

  const handleClickSubmit = () => {
    input && dispatch(actions.submitChatRequest(input));
    e.preventDefault();
    setInput("");

    // axios.post("/chat", { input });
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
      chat={chatList}
      input={input}
      user={user}
      listRef={listRef}
    />
  );
}
