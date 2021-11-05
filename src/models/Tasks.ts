import { Schema, model } from 'mongoose';

const TasksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  finalDate: {
    type: Date,
    default: Date.now,
  },
});

const TasksModel = model('tasks', TasksSchema);

module.exports = {
  TasksModel,
};
