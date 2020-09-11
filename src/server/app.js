const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const indexRouter = require("./routes");
const connect = require("./schemas");

const app = express();
connect();

app.set("port", process.env.PORT || 8000);

app.use(morgan("dev"));

app.use("/", indexRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 대기중!!!");
});
