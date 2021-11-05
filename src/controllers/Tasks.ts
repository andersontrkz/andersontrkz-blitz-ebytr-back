const TasksService = require('../services/Tasks.ts');

const controllerCreate = async (req: any, res: any) => {
  const {
    title, description, tags, priority, status, startDate, finalDate,
  } = req.body;

  const task = await TasksService.serviceCreate({
    title, description, tags, priority, status, startDate, finalDate,
  });

  return res.status(201).json(task);
};

const controllerGetAll = async (_req: any, res: any) => {
  const tasks = await TasksService.serviceGetAll();

  return res.status(200).json(tasks);
};

const controllerDelete = async (req: any, res: any) => {
  const { id } = req.params;

  const deletedTask = await TasksService.serviceDelete(id);

  return res.status(200).json(deletedTask);
};

const controllerUpdate = async (req: any, res: any) => {
  const { id } = req.params;

  const {
    title, description, tags, priority, status, startDate, finalDate,
  } = req.body;
  const taskUpdated = await TasksService.serviceUpdate(id, {
    title, description, tags, priority, status, startDate, finalDate,
  });

  return res.status(200).json(taskUpdated);
};

module.exports = {
  controllerCreate,
  controllerGetAll,
  controllerDelete,
  controllerUpdate,
};
