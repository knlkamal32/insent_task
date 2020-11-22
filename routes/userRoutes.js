const router = require('express').Router();
const userController = require('../controllers/userController');


router.post('/', userController.getUser);
router.get('/all', userController.getUsers);
router.put('/', userController.insertUser);
router.patch('/', userController.updateUser);
router.delete('/', userController.deleteUser);
router.get('/aggregate', userController.getAggregateUsers)

module.exports  = router;