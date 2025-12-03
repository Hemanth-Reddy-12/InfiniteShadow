const express = require("express");
const router = express.Router();
const {
  getTasks,
  completeTask,
  getUpcomingTasks,
  getHistory,
  createTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/tasks", getTasks);
router.post("/complete", completeTask);
router.get("/upcomingTask", getUpcomingTasks);
router.get("/history", getHistory);
router.post("/task", createTask);
router.delete("/task", deleteTask);

module.exports = router;
