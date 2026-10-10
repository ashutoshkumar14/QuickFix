// // const express = require('express');
// // const router = express.Router();
// // const authController = require('../controllers/authController');

// // router.post('/register', authController.register);
// // router.post('/login', authController.login);

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const adminController = require('../controllers/adminController');
// const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');

// // Sirf logged-in ADMIN access kar sake
// router.get('/stats', verifyToken, authorizeRoles('admin'), adminController.getAdminStats);
// router.get('/bookings', verifyToken, authorizeRoles('admin'), adminController.getAllAdminBookings);
// router.get('/users', verifyToken, authorizeRoles('admin'), adminController.getAllUsers);

// module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;