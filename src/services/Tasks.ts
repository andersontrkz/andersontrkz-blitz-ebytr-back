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

const serviceGetById = async (id: string) => {
  const task = await TasksModel.modelGetById(id);

  return task;
};

const serviceDelete = async (id: string) => {
  const task = await TasksModel.modelDelete(id);

  return task;
};

const serviceUpdate = async (id: string, data: Task) => {
  const task = await TasksModel.modelUpdate(id, data);

  return task;
};

module.exports = {
  serviceCreate,
  serviceGetAll,
  serviceGetById,
  serviceDelete,
  serviceUpdate,
};
