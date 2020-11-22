const router = require('express').Router();
const visitorController = require('../controllers/visitorController');


router.post('/', visitorController.getVisitor);
router.get('/all', visitorController.getVisitors);
router.post('/', visitorController.insertVisitor);
router.patch('/', visitorController.updateVisitor);
router.delete('/', visitorController.deleteVisitor);
router.get('/aggregate', visitorController.getAggregateVisitors);

module.exports = router;