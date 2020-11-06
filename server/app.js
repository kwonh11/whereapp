const express = require("express");
const morgan = require("morgan");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const ColorHash = require("color-hash");
require("dotenv").config();

const webSocket = require("./socket");
const passportConfig = require("./passport");
const connect = require("./schemas");
const authRouter = require("./routes/auth");
const locationRouter = require("./routes/location");
const placeRouter = require("./routes/place");
const commentRouter = require("./routes/comment");
const middlewares = require("./routes/middlewares");
const http = require("http");
const https = require("https");
const fs = require("fs");

const app = express();
let server = http.createServer(app);

connect();
passportConfig(passport);

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

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  const options = {
    ca: fs.readFileSync("/etc/letsencrypt/live/whereapp.ga/fullchain.pem"),
    key: fs.readFileSync("/etc/letsencrypt/live/whereapp.ga/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/whereapp.ga/cert.pem"),
  };
  server = https.createServer(options, app);
} else {
  app.use(morgan("dev"));
}

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use("/img", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  const colorHash = new ColorHash();
  if (!req.session.color) {
    req.session.color = colorHash.hex(req.sessionID);
  }
  next();
});

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
  // res.locals.error = req.app.get("env") === "devlopment" ? err : {};
  // 임시 에러처리 리다이렉트
  res.redirect("/");
});
server.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 대기중!!!");
});

webSocket(server, app, sessionMiddleware);
