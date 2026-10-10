const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Register Controller
exports.register = async (req, res) => {
  const { fullName, email, phone, password, role } = req.body;

  try {
    const [existing] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const [result] = await db.query(
      'INSERT INTO users (full_name, email, phone, password_hash, role) VALUES (?, ?, ?, ?, ?)',
      [fullName, email, phone, passwordHash, role || 'customer']
    );

    const token = jwt.sign(
      { id: result.insertId, role: role || 'customer' },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: result.insertId, fullName, email, role: role || 'customer' }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// Login Controller
exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ? AND role = ?', [email, role]);
    if (rows.length === 0) {
      return res.status(400).json({ message: 'Invalid email, role or account not found.' });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password.' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: { id: user.id, fullName: user.full_name, email: user.email, role: user.role }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during login' });
  }
};