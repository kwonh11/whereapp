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

const app = express();
connect();
passportConfig(passport);

app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 대기중!!!");
});
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
