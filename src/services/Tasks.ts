// BASED ON https://mongoosejs.com/docs AND https://github.com/bradtraversy/mern_shopping_list

const { TasksModel } = require('../models/Tasks.ts');
const TasksValidator = require('../validators/Tasks.ts');

export interface Task {
  title: string,
  description: string,
  tags: string,
  priority: string,
  status: string,
  startDate: string,
  finalDate: string
}

const serviceCreate = async (data: Task) => {
  const { error } = TasksValidator.tasksFields(data);

  if (error) return { code: 404, message: 'Invalid entries. Try again.' };

  const newTask = new TasksModel(data);
  const createdTask = await newTask.save();

  return createdTask;
};

const serviceGetAll = async () => {
  const tasks = await TasksModel.find();

  return tasks;
};

const serviceDelete = async (id: string) => {
  const task = await TasksModel.findById(id);
  if (!task) return { code: 404, message: 'Not found. Try again.' };

  const removedTask = await TasksModel.remove({ _id: id });

  return removedTask;
};

const serviceUpdate = async (id: string, data: Task) => {
  const task = await TasksModel.findById(id);
  if (!task) return { code: 404, message: 'Not found. Try again.' };

  const updatedTask = await TasksModel.findOneAndUpdate({ _id: id }, data, { new: true });

  return updatedTask;
};

module.exports = {
  serviceCreate,
  serviceGetAll,
  serviceDelete,
  serviceUpdate,
};
