// const express = require('express');
// const router = express.Router();
// const serviceController = require('../controllers/serviceController');

// router.get('/', serviceController.getAllServices);

// module.exports = router;


const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/services
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM services');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Error fetching services' });
  }
});

module.exports = router;