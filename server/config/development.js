module.exports = {
  DATABASE_URL: process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp',
  JWT_SECRET: process.env.JWT_SECRET || 'mysecretkey',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  PORT: process.env.PORT || 3000,
};
