const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
require("dotenv").config();
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const cors = require("cors");

const indexRouter = require("./routes");
const authRouter = require("./routes/auth");
const connect = require("./schemas");
const passportConfig = require("./passport");

const devPort = 9000;
const app = express();

connect();
passportConfig(passport);

app.set("port", process.env.PORT || 8000);

// if (process.env.NODE_ENV == "development") {
//   const config = require("../webpack.config");
//   let compiler = webpack(config);
//   let devServer = new WebpackDevServer(compiler, config.devServer);
//   devServer.listen(devPort, () => {
//     console.log("webpack-dev-server is listening on port", devPort);
//   });
// }
const corsOptions = {
  origin: ["http://localhost:8000", "http://localhost:9000"],
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 대기중!!!");
});
