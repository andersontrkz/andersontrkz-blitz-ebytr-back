const router = require('express').Router();

const TasksController = require('../controllers/Tasks.ts');

router.post('/tasks', TasksController.controllerCreate);
router.get('/tasks', TasksController.controllerGetAll);

module.exports = router;
