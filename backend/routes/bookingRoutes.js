const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/create', bookingController.createBooking);
router.get('/customer/:email', bookingController.getCustomerBookings);

// 👈 Technician Routes
router.get('/pending', bookingController.getPendingJobs);
router.patch('/status/:id', bookingController.updateBookingStatus);

module.exports = router;


