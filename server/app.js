const express = require("express");
const morgan = require("morgan");
const path = require('path');
const cors = require('cors');
const userRouter = require('./routes/user');
const newsRouter = require('./routes/news');
const middlewares = require('./routes/middlewares')
require("dotenv").config();

const indexRouter = require("./routes");
const connect = require("./schemas");

const app = express();
connect();


app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 대기중!!!");
});
app.use(middlewares.logger);
app.use(morgan("dev"));
app.use(express.json({extended:true}));
app.use(express.urlencoded());
app.use("/user",userRouter);
app.use("/news",newsRouter);

app.use(express.static(path.resolve(__dirname, 'view')));



