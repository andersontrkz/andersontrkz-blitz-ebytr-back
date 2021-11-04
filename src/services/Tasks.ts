const TasksModel = require('../models/Tasks.ts');
const TasksValidator = require('../validators/Tasks.ts');
const { BAD_REQUEST } = require('../utils/statusCodes.ts');

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

  if (error) return { code: BAD_REQUEST, message: 'Invalid entries. Try again.' };

  const task = await TasksModel.modelCreate(data);

  return task;
};

const serviceGetAll = async () => {
  const tasks = await TasksModel.modelGetAll();

  return tasks;
};

module.exports = {
  serviceCreate,
  serviceGetAll,
};
