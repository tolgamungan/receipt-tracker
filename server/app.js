require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/test');
const { errorMiddleware } = require('./middlewares');
const routes = require('./routes');

// Initialize Express app
const app = express();

// Set up middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(config.LOG_LEVEL));

// Connect to MongoDB
mongoose.connect(config.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Set up routes
app.use('/api', routes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const port = config.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
