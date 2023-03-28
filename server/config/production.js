module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    LOG_LEVEL: 'info'
  };
// using dotenv to make the application more flexible and easier to deploy in different environments