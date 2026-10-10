const jwt = require('jsonwebtoken');

// Token verify karne ke liye
exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || 'quickfix_secret_key');
    req.user = verified; // { id, role, email }
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or Expired Token' });
  }
};

// Role verify karne ke liye (e.g. 'admin', 'technician', 'customer')
exports.authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access Forbidden: Insufficient permissions' });
    }
    next();
  };
};