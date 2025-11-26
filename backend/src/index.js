const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const app = express();

// middelware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to database
connectDB();

app.get("/", (res, req) => {
  res.json({ message: "welcome to the todo API" });
});

const PORT = process.env.DEVELOPMENT_PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listen at port : ${PORT}`);
});
