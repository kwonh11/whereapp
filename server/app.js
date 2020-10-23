const express = require("express");
const morgan = require("morgan");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const http = require("http");
const socketio = require("socket.io");
const socket = require("./socket");
require("dotenv").config();

const passportConfig = require("./passport");
const connect = require("./schemas");
const authRouter = require("./routes/auth");
const locationRouter = require("./routes/location");
const placeRouter = require("./routes/place");
const commentRouter = require("./routes/comment");
const middlewares = require("./routes/middlewares");

const app = express();
connect();
passportConfig(passport);
const httpServer = http.createServer(app);
const io = socketio(httpServer);
// app.set("io", io);
socket(io);

const sessionMiddleware = session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
});

app.set("port", process.env.PORT || 8000);
app.use(morgan("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use("/img", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", express.static(path.join(__dirname, "view")));
app.use("/auth", authRouter);
app.use("/location", locationRouter);
app.use("/place", placeRouter);
app.use("/comment", commentRouter);

app.use((req, res, next) => {
  const err = new Error("Not Fount");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "devlopment" ? err : {};
  res.status(err.status || 500);
});

httpServer.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 대기중!!!");
});
