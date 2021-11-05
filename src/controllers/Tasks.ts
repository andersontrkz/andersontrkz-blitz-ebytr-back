const TasksService = require('../services/Tasks.ts');
const { CREATE, NOT_FOUND } = require('../utils/statusCodes.ts');

const controllerCreate = async (req: any, res: any) => {
  const {
    title, description, tags, priority, status, startDate, finalDate,
  } = req.body;

  const task = await TasksService.serviceCreate({
    title, description, tags, priority, status, startDate, finalDate,
  });

  return res.status(CREATE).json(task);
};

const controllerGetAll = async (_req: any, res: any) => {
  const tasks = await TasksService.serviceGetAll();

  return res.status(NOT_FOUND).json(tasks);
};

const controllerDelete = async (req: any, res: any) => {
  const { id } = req.params;

  const deletedTask = await TasksService.serviceDelete(id);

  return res.status(NOT_FOUND).json(deletedTask);
};

const controllerUpdate = async (req: any, res: any) => {
  const { id } = req.params;

  const {
    title, description, tags, priority, status, startDate, finalDate,
  } = req.body;
  const taskUpdated = await TasksService.serviceUpdate(id, {
    title, description, tags, priority, status, startDate, finalDate,
  });

  return res.status(NOT_FOUND).json(taskUpdated);
};

module.exports = {
  controllerCreate,
  controllerGetAll,
  controllerDelete,
  controllerUpdate,
};
