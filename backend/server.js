// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const authRoutes = require('./routes/authRoutes');
// const bookingRoutes = require('./routes/bookingRoutes');
// const adminRoutes = require('./routes/adminRoutes');

// const app = express();

// app.use(cors({
//   origin: true,
//   credentials: true
// }));

// app.use(express.json());

// // Routes Mount - Check this line carefully:
// app.use('/api/auth', authRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/admin', adminRoutes);

// app.get('/', (req, res) => {
//   res.send('QuickFix Backend API is running...');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Backend server running on http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const adminRoutes = require('./routes/adminRoutes');
const serviceRoutes = require('./routes/serviceRoutes'); // <-- Add this

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

// Mount All Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/services', serviceRoutes); // <-- Add this

app.get('/', (req, res) => {
  res.send('QuickFix Backend API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});