const TasksService = require('../services/Tasks.ts');
const { CREATE, SUCCESS } = require('../utils/statusCodes.ts');

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

  return res.status(SUCCESS).json(tasks);
};

module.exports = {
  controllerCreate,
  controllerGetAll,
};
