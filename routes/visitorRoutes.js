const router = require('express').Router();
const primaryController = require('../controllers/primaryVisitorController');
const replicaController = require('../controllers/replicaVisitorController');
const aggregateController = require('../controllers/replicaAggController');



router.post('/', replicaController.getVisitor);
router.get('/all', replicaController.getVisitors);
router.put('/', primaryController.insertVisitor);
router.patch('/', primaryController.updateVisitor);
router.delete('/', primaryController.deleteVisitor);
router.get('/aggregate', aggregateController.getAggregateVisitors);

module.exports = router;