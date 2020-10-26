import socketio from "socket.io-client";

export default socketio.connect("http://localhost:8000",{ path: "/chat/socket"});