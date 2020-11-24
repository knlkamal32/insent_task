const router = require('express').Router();
const primaryController = require('../controllers/primaryUserController');
const replicaController = require('../controllers/replicaUserController');
const aggregateController = require('../controllers/replicaAggController');

router.post('/', replicaController.getUser);
router.get('/all', replicaController.getUsers);
router.put('/', primaryController.insertUser);
router.patch('/', primaryController.updateUser);
router.delete('/', primaryController.deleteUser);
router.get('/aggregate', aggregateController.getAggregateUsers)

module.exports  = router;