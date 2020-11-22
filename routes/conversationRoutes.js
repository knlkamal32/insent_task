const router = require('express').Router();
const conversationController = require('../controllers/conversationController');

router.post('/', conversationController.getConversation);
router.get('/all', conversationController.getConversations);
router.put('/', conversationController.insertConversation);
router.patch('/', conversationController.updateConversation);
router.delete('/', conversationController.deleteConversation);
router.get('/aggregate', conversationController.getAggregateConversations);

module.exports = router;