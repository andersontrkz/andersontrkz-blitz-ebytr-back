const Joi = require('joi');

export interface Task {
  title: string,
  description: string,
  tags: string,
  priority: string,
  status: string,
  startDate: string,
  finalDate: string
}

const tasksFields = (data: Task) => {
  const task = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.string().required(),
    priority: Joi.string().required(),
    status: Joi.string().required(),
    startDate: Joi.date().required(),
    finalDate: Joi.date().required(),
  });

  return task.validate(data);
};

module.exports = {
  tasksFields,
};
