import { useState, useEffect } from "react";
import Chat from "../component/Chat";
import { actions } from "../../common/reducer/chat";
import { useDispatch, useSelector } from "react-redux";

export default function ChatContainer() {
  console.log("==========ChatContainer");

  const { chatList, user, count } = useSelector((state) => state.chat);
  const { isLoggedIn, info } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [visual, setVisual] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("useEffect");
    console.log(chatList);
  }, [chatList]);

  const handleClick = () => {
    // if (isLoggedIn) {

    visual
      ? dispatch(actions.setDisconnectRequest())
      : dispatch(actions.setConnectRequest());
    setVisual(!visual);
    // }
  };

  const handleClickSubmit = () => {
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
    />
  );
}
