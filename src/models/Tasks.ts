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

module.exports = {
  modelCreate,
};
