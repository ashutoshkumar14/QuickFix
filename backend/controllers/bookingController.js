// const db = require('../config/db');

// // 1. Create a new booking
// exports.createBooking = async (req, res) => {
//   const {
//     customerName,
//     customerEmail,
//     customerPhone,
//     serviceId,
//     serviceName,
//     servicePrice,
//     address,
//     city,
//     bookingDate,
//     timeSlot,
//     issueDescription
//   } = req.body;

//   try {
//     const [result] = await db.query(
//       `INSERT INTO bookings
//       (customer_name, customer_email, customer_phone, service_id, service_name, service_price, address, city, booking_date, time_slot, issue_description)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//       [
//         customerName,
//         customerEmail,
//         customerPhone,
//         serviceId,
//         serviceName,
//         servicePrice,
//         address,
//         city || 'Delhi NCR',
//         bookingDate,
//         timeSlot,
//         issueDescription
//       ]
//     );

//     res.status(201).json({
//       message: 'Booking created successfully!',
//       bookingId: result.insertId
//     });
//   } catch (error) {
//     console.error('Error creating booking:', error);
//     res.status(500).json({ message: 'Failed to create booking in database' });
//   }
// };

// // 2. Get bookings by customer email (for dashboard)
// exports.getCustomerBookings = async (req, res) => {
//   const { email } = req.params;

//   try {
//     const [rows] = await db.query(
//       'SELECT * FROM bookings WHERE customer_email = ? ORDER BY created_at DESC',
//       [email]
//     );
//     res.json(rows);
//   } catch (error) {
//     console.error('Error fetching bookings:', error);
//     res.status(500).json({ message: 'Error retrieving user bookings' });
//   }
// };

const db = require('../config/db');

// 1. Create a new booking
exports.createBooking = async (req, res) => {
  const {
    customerName,
    customerEmail,
    customerPhone,
    serviceId,
    serviceName,
    servicePrice,
    address,
    city,
    bookingDate,
    timeSlot,
    issueDescription
  } = req.body;

  try {
    const [result] = await db.query(
      `INSERT INTO bookings
      (
        customer_name,
        customer_email,
        customer_phone,
        service_id,
        service_name,
        service_price,
        address,
        city,
        booking_date,
        time_slot,
        issue_description
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        customerName,
        customerEmail,
        customerPhone,
        serviceId,
        serviceName,
        servicePrice,
        address,
        city || 'Delhi NCR',
        bookingDate,
        timeSlot,
        issueDescription
      ]
    );

    res.status(201).json({
      message: 'Booking created successfully!',
      bookingId: result.insertId
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      message: 'Failed to create booking in database'
    });
  }
};

// 2. Get bookings by customer email
exports.getCustomerBookings = async (req, res) => {
  const { email } = req.params;

  try {
    const [rows] = await db.query(
      'SELECT * FROM bookings WHERE customer_email = ? ORDER BY created_at DESC',
      [email]
    );

    res.json(rows);

  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      message: 'Error retrieving user bookings'
    });
  }
};

// 3. Get all pending jobs for technicians to accept
exports.getPendingJobs = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM bookings WHERE status = 'pending' ORDER BY created_at DESC"
    );

    res.json(rows);

  } catch (error) {
    console.error('Error fetching pending jobs:', error);
    res.status(500).json({
      message: 'Error retrieving pending jobs'
    });
  }
};

// 4. Update booking status
exports.updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status, technicianName } = req.body;

  try {
    // Only update technician_name if provided, otherwise preserve existing or set 'Unassigned'
    if (technicianName) {
      await db.query(
        "UPDATE bookings SET status = ?, technician_name = ? WHERE id = ?",
        [status, technicianName, id]
      );
    } else {
      await db.query(
        "UPDATE bookings SET status = ? WHERE id = ?",
        [status, id]
      );
    }

    res.json({
      message: `Job ${status} successfully!`
    });

  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({
      message: 'Failed to update booking status'
    });
  }
};