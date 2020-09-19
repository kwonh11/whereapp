import React, { useState } from "react";
import Chat from "../component/Chat";

export default function ChatContainer() {
  const [visual, setVisual] = useState(false);
  const handleClick = () => {
    setVisual(!visual);
  };

  return <Chat visual={visual} handleClick={handleClick} />;
}
