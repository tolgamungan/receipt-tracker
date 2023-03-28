const express = require('express');
const router = express.Router();

// Define the routes for the root endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Receipt Tracker' });
});


// Export the router object
module.exports = router;
