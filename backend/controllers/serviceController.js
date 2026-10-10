const db = require('../config/db');

exports.getAllServices = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM services');
    
    // JSON strings ko wapas normal arrays mein parse karna (agar MySQL string format mein return kare)
    const formattedServices = rows.map(service => ({
      ...service,
      commonIssues: typeof service.commonIssues === 'string' ? JSON.parse(service.commonIssues) : service.commonIssues,
      inspectionChecklist: typeof service.inspectionChecklist === 'string' ? JSON.parse(service.inspectionChecklist) : service.inspectionChecklist
    }));

    res.json(formattedServices);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Error retrieving services from database' });
  }
};