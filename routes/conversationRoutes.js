const router = require('express').Router();
const primaryController = require('../controllers/primaryconversationController');
const aggregateController = require('../controllers/replicaAggController');

router.post('/', primaryController.getConversation);
router.get('/all', primaryController.getConversations);
router.put('/', primaryController.insertConversation);
router.patch('/', primaryController.updateConversation);
router.delete('/', primaryController.deleteConversation);
router.get('/aggregate', aggregateController.getAggregateConversations);

module.exports = router;