const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();

// * middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://shadow-sandy-six.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * connect to database
connectDB();

app.get("/api", (req, res) => {
  return res.json({
    msg: "welcome to todo list api",
  });
});

// * Routes
app.use("/api", taskRoutes);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.DEVELOPMENT_PORT || 5000;
  app.listen(PORT, () => {
    console.log(`server is listen at port : ${PORT}`);
  });
}

module.exports = app;
