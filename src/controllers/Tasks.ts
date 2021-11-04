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
  const task = await TasksService.serviceGetById(id);

  if (!task) return res.status(NOT_FOUND).json({ code: NOT_FOUND, message: 'No Content. Try again.' });

  const deletedTask = await TasksService.serviceDelete(id);

  return res.status(NOT_FOUND).json(deletedTask);
};

module.exports = {
  controllerCreate,
  controllerGetAll,
  controllerDelete,
};
