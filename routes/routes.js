const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const visitorRoutes  = require('./visitorRoutes');
const conversationRoutes = require('./conversationRoutes');

router.use('/user', userRoutes);
router.use('/visitor', visitorRoutes);
router.use('/conversation', conversationRoutes);

module.exports = router;
