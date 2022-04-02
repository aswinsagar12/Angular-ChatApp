const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/ChatApp";

const dbConnection = mongoose
  .connect(url)
  .then((res) => console.log("connected"))
  .catch((err) => console.log(err));


  module.exports = dbConnection