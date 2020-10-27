const socketio = require("socket.io");

module.exports = (server, app, sessionMiddleware) => {
  const io = socketio(server, { path: "/chat/socket" });
  app.set("io", io);
  io.use((socket, next) => {
    sessionMiddleware(socket.request, socket.request.res, next);
  });

  io.on("connection", (socket) => {
    socket.use((packet, next) => {
      // 비 로그인시
      if (!packet[1].userId) next(new Error("403"));
      next();
    });
    socket.on("join", (data) => {
      io.emit("chat", {
        nick: "system",
        userId: "system",
        message: ` ${data.nick} 님이 입장했습니다.`,
      });
    });
    socket.on("chat", (msg) => {
      io.emit("chat", msg);
    });
  });
};
