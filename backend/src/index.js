const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const TaskSchema = require("./model/TaskSchema");
require("dotenv").config();

const app = express();

// middelware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to database
connectDB();

app.get("/api", (req, res) => {
  return res.json({
    msg: "welcome to todo list api",
  });
});

// Routes

// ! route get using /api/tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const task = await TaskSchema.find();
    console.log(task);
    return res.json({
      task: task,
      msg: "retrive succesfully",
    });
  } catch (error) {
    console.log(error);
  }
});

// ! route post using /api/task
app.post("/api/task", async (req, res) => {
  try {
    const { userId, title, tag } = req.body;
    if (!userId) {
      return res.json({ msg: "userId is required" });
    }

    if (!title) {
      return res.json({ msg: "title is required" });
    }

    if (!tag) {
      return res.json({ msg: "tag is required" });
    }

    if (
      tag != "work" ||
      tag != "personal" ||
      tag != "fitness" ||
      tag != "project"
    ) {
      return res.json({
        msg: "tag must be [ work , personal , project , fitness ]",
      });
    }

    const _task = TaskSchema(req.body);
    _task.save();
    return res.json({ msg: "task added" });
  } catch (error) {
    console.log(error);
    return res.json({ msg: "error while adding the task" });
  }
});

const PORT = process.env.DEVELOPMENT_PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listen at port : ${PORT}`);
});
