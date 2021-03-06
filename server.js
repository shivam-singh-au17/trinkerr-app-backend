require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT

const connect = require("./src/config/db");

const tradingAppController = require("./src/controllers/tradingApp.controlers");
const watchListController = require("./src/controllers/watchLiist.controllers");

app.use(cors());
app.use(express.json());

app.use(tradingAppController);
app.use(watchListController);

app.listen(port, async () => {

  await connect();
  console.log("Listening on post " + port);

})


module.exports = app;