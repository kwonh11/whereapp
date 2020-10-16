const SocketIO = require("socket.io");

module.exports = (server, app, sessionMiddleware) => {
  const io = SocketIO(server, { path: "/socket.io" });

  app.set("io", io);

  //미들웨어 설정
  io.use((socket, next) => {
    sessionMiddleware(socket.request, socket.request.res, next);
  });

  io.on("connect", (socket) => {
    console.log("-----클라이언트 접속 ");

    const req = socket.request;
    socket.on("join", function (data) {
      socket.emit("chat", {
        user: "system",
        chat: `${req.session.color}님이 입장하셨습니다.`,
      });
    });

    socket.on("disconnect", () => {
      console.log("-----클라이언트 접속 해제");
    });
  });
};
