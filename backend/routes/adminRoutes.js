const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/stats', adminController.getAdminStats);
router.get('/bookings', adminController.getAllAdminBookings);
router.get('/users', adminController.getAllUsers);

module.exports = router;