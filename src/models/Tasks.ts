const connection = require('./connection.ts');

export interface Task {
  title: string,
  description: string,
  tags: string,
  priority: string,
  status: string,
  startDate: string,
  finalDate: string
}

const modelCreate = async (data: Task) => {
  const db = await connection();

  const task = await db.collection('tasks').insertOne(data);

  return task;
};

const modelGetAll = async () => {
  const db = await connection();

  const tasks = await db.collection('tasks').find({}).toArray();

  return tasks;
};

module.exports = {
  modelCreate,
  modelGetAll,
};
