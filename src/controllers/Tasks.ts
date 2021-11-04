const TasksService = require('../services/Tasks.ts');
const { CREATE } = require('../utils/statusCodes.ts');

const controllerCreate = async (req: any, res: any) => {
  const {
    title, description, tags, priority, status, startDate, finalDate,
  } = req.body;

  const task = await TasksService.serviceCreate({
    title, description, tags, priority, status, startDate, finalDate,
  });

  return res.status(CREATE).json(task);
};

module.exports = {
  controllerCreate,
};
