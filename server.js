const express = require("express");
const cors = require("cors");
const faker = require("faker");
const controller = require("./controller");

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.json());

app.get("/cars", controller.index);
app.get("/car/:id", controller.show);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
