const express = require("express");
const { main } = require("./rabbitmq/index.js");
const { router } = require("./routes");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(router);

main();

module.exports = { app };
