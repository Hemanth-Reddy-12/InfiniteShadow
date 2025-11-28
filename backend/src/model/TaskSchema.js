const mongoose = require("mongoose");
const allowedTags = ["work", "personal", "project", "fitness"];

const TaskSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  tag: {
    type: String,
    enum: allowedTags,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("TaskSchema", TaskSchema);
