const router = require('express').Router;

const userController = require('../controllers/userController');
const visitorController = require('../controllers/visitorController');
const conversationController = require('../controllers/conversationController');

router.get('/user',userController.getUser);
router.get('/users',userController.getUsers);
router.post('/user',userController.insertUser);
router.patch('/user',userController.updateUser);
router.delete('/user',userController.deleteUser);
router.get('/user/aggregate',userController.getAggregateUsers)
router.get('/visitor',visitorController.getVisitor);
router.get('/visitors',visitorController.getVisitors);
router.post('/visitor',visitorController.insertVisitor);
router.patch('/visitor',visitorController.updateVisitor);
router.delete('/visitor',visitorController.deleteVisitor);
router.get('/visitor/aggregate',visitorController.getAggregateVisitors);
router.get('/conversation',conversationController.getConversation);
router.get('/conversations',conversationController.getConversations);
router.post('/conversation',conversationController.insertConversation);
router.patch('/conversation',conversationController.updateConversation);
router.delete('/conversation',conversationController.deleteConversation);
router.get('/conversation/aggregate',conversationController.getAggregateConversations);