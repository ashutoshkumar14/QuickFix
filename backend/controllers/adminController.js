// const db = require('../config/db');

// // 1. Get Platform Metrics (Total Users, Bookings, Revenue)
// exports.getAdminStats = async (req, res) => {
//   try {
//     const [[{ totalUsers }]] = await db.query('SELECT COUNT(*) AS totalUsers FROM users');
//     const [[{ totalBookings }]] = await db.query('SELECT COUNT(*) AS totalBookings FROM bookings');
//     const [[{ completedJobs }]] = await db.query("SELECT COUNT(*) AS completedJobs FROM bookings WHERE status = 'completed'");
//     const [[{ totalRevenue }]] = await db.query("SELECT COALESCE(SUM(service_price), 0) AS totalRevenue FROM bookings WHERE status = 'completed'");

//     res.json({
//       totalUsers,
//       totalBookings,
//       completedJobs,
//       totalRevenue
//     });
//   } catch (error) {
//     console.error('Error fetching admin stats:', error);
//     res.status(500).json({ message: 'Error retrieving admin stats' });
//   }
// };

// // 2. Get All Bookings for Admin Table
// exports.getAllAdminBookings = async (req, res) => {
//   try {
//     const [rows] = await db.query('SELECT * FROM bookings ORDER BY created_at DESC');
//     res.json(rows);
//   } catch (error) {
//     console.error('Error fetching all bookings:', error);
//     res.status(500).json({ message: 'Error retrieving all bookings' });
//   }
// };

// // 3. Get All Registered Users
// exports.getAllUsers = async (req, res) => {
//   try {
//     const [rows] = await db.query('SELECT id, full_name, email, phone, role, created_at FROM users ORDER BY created_at DESC');
//     res.json(rows);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ message: 'Error retrieving users' });
//   }
// };

const db = require('../config/db');

// 1. Stats summary count
exports.getAdminStats = async (req, res) => {
  try {
    const [[customerCount]] = await db.query("SELECT COUNT(*) AS total FROM users WHERE role = 'customer'");
    const [[techCount]] = await db.query("SELECT COUNT(*) AS total FROM users WHERE role = 'technician'");
    const [[bookingCount]] = await db.query("SELECT COUNT(*) AS total FROM bookings");

    res.json({
      totalCustomers: customerCount ? customerCount.total : 0,
      totalTechnicians: techCount ? techCount.total : 0,
      totalBookings: bookingCount ? bookingCount.total : 0
    });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    res.status(500).json({ message: 'Error retrieving statistics from database' });
  }
};

// 2. All bookings list for admin
exports.getAllAdminBookings = async (req, res) => {
  try {
    const [bookings] = await db.query("SELECT * FROM bookings ORDER BY id DESC");
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching all bookings:', error);
    res.status(500).json({ message: 'Error retrieving bookings' });
  }
};

// 3. All registered users list (Customers & Technicians)
exports.getAllUsers = async (req, res) => {
  try {
    const [users] = await db.query("SELECT id, full_name, email, phone, role, created_at FROM users ORDER BY id DESC");
    res.json(users);
  } catch (error) {
    console.error('Error fetching all users:', error);
    res.status(500).json({ message: 'Error retrieving users' });
  }
};