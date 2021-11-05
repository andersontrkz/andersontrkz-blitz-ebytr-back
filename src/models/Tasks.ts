import { ObjectId } from 'mongodb';

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

const modelGetById = async (id: string) => {
  const db = await connection();
  const task = await db.collection('tasks').findOne({ _id: new ObjectId(id) });

  return task;
};

const modelDelete = async (id: string) => {
  const db = await connection();
  const task = await db.collection('tasks').deleteOne({ _id: new ObjectId(id) });

  return task;
};

const modelUpdate = async (id: string, data: Task) => {
  const db = await connection();
  const { matchedCount } = await db.collection('tasks')
    .updateOne({ _id: new ObjectId(id) }, { $set: data });

  if (matchedCount) {
    return db.collection('tasks').findOne({ _id: new ObjectId(id) });
  }

  return matchedCount;
};

module.exports = {
  modelCreate,
  modelGetAll,
  modelGetById,
  modelDelete,
  modelUpdate,
};
