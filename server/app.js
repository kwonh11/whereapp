const express = require("express");
const morgan = require("morgan");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const middlewares = require("./routes/middlewares");
require("dotenv").config();

const passportConfig = require("./passport");
const connect = require("./schemas");
const authRouter = require("./routes/auth");
const locationRouter = require("./routes/location");
const placeRouter = require("./routes/place");

const app = express();
connect();
passportConfig(passport);

app.set("port", process.env.PORT || 8000);

app.use(middlewares.logger);
app.use(morgan("dev"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use("/img", express.static(path.join(__dirname, "uploads")));
app.use(cookieParser("secret"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secret",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", express.static(path.join(__dirname, "view")));
app.use("/auth", authRouter);
app.use("/location", locationRouter);
app.use("/place", placeRouter);

app.use((req, res, next) => {
  const err = new Error("Not Fount");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "devlopment" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 대기중!!!");
});
