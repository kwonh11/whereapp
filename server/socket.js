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

    socket.on("join", (data) => {
      io.emit("join", {
        chat: { text: `${data}님이 입장하셨습니다.` },
        count: io.engine.clientsCount,
      });
    });

    socket.on("chat", function (data) {
      const { nick, image, text } = data;
      io.emit("chat", {
        id: req.session.passport.user,
        nick,
        image,
        text,
      });
    });

    socket.on("exit", (data) => {
      io.emit("exit", {
        chat: { text: `${data}님이 퇴장하셨습니다.` },
        count: io.engine.clientsCount,
      });
    });

    socket.on("disconnect", () => {
      console.log("-----클라이언트 접속 해제");
      io.emit("exit", {
        chat: { text: `${data}님이 퇴장하셨습니다.` },
        count: io.engine.clientsCount,
      });
    });
  });
};
