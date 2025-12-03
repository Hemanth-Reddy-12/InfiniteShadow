const TaskSchema = require("../model/TaskSchema");

const getTasks = async (req, res) => {
  try {
    const tasks = await TaskSchema.find();
    return res.json({
      task: tasks,
      msg: "retrieve successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error retrieving tasks" });
  }
};

const completeTask = async (req, res) => {
  try {
    const id = req.body.id;
    const task = await TaskSchema.findById(id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }
    task.isCompleted = !task.isCompleted;
    task.completedAt = Date.now();
    await task.save();

    return res.json({
      msg: "edited successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error completing task" });
  }
};

const getUpcomingTasks = async (req, res) => {
  try {
    const inCompleted = await TaskSchema.find({ isCompleted: false });
    const work_count = await TaskSchema.countDocuments({ tag: "work" });
    const fitness_count = await TaskSchema.countDocuments({ tag: "fitness" });
    const project_count = await TaskSchema.countDocuments({ tag: "project" });
    const personal_count = await TaskSchema.countDocuments({ tag: "personal" });
    return res.json({
      task: inCompleted,
      count: {
        work: work_count,
        fitness: fitness_count,
        project: project_count,
        personal: personal_count,
      },
      msg: "Task details",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error retrieving upcoming tasks" });
  }
};

const getHistory = async (req, res) => {
  try {
    const history = await TaskSchema.find({ isCompleted: true });
    return res.json({
      task: history,
      msg: "retrieve successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error retrieving history" });
  }
};

const createTask = async (req, res) => {
  try {
    const tags = ["work", "personal", "fitness", "project"];
    const { userId, title, tag } = req.body;
    if (!userId) {
      return res.status(400).json({ msg: "userId is required" });
    }

    if (!title) {
      return res.status(400).json({ msg: "title is required" });
    }

    if (!tag) {
      return res.status(400).json({ msg: "tag is required" });
    }

    if (!tags.includes(tag)) {
      return res.status(400).json({
        msg: "tag must be [ work , personal , project , fitness ]",
      });
    }

    const _task = new TaskSchema(req.body);
    await _task.save();
    return res.json({ msg: "task added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error while adding the task" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.body;
    const deleteTask = await TaskSchema.findByIdAndDelete(id);
    if (!deleteTask) {
      return res.status(404).json({ msg: "task not found" });
    }
    return res.status(200).json({ msg: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error while adding the task" });
  }
};

module.exports = {
  getTasks,
  completeTask,
  getUpcomingTasks,
  getHistory,
  createTask,
  deleteTask,
};
