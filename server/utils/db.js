/*jshint esversion: 8 */
const mongoose = require('mongoose');
const config = require('../config');

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;

// By defining the database connection logic in a separate file 
// and exporting it as a function, this implementation allows for easy reusability 
// and separation of concerns in the application's code
