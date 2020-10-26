module.exports = function (io) {
  // io 미들웨어로 verify하기
  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(`socket id : ${socket.id}`);
    socket.on("chat", (msg) => {
      console.log(`${msg.nick} : ${msg.message}`);
      io.emit("chat", msg);
    });
  });
};
