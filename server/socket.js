module.exports = function (io) {
  // io 미들웨어로 verify하기
  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(`socket id : ${socket.id}`);
    socket.on("chatmessage", (msg) => {
      console.log(`message : ${msg}`);
      io.emit("chatmessage", msg);
    });
  });
};
