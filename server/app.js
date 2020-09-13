const express = require("express");
const morgan = require("morgan");
const path = require('path');
const cors = require('cors');
require("dotenv").config();

const indexRouter = require("./routes");
const connect = require("./schemas");

const app = express();
connect();


app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 대기중!!!");
});

app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, 'view')));



