const app = require('../app');
const config = require('./test');

const port = config.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;


// module.exports = {
//   DATABASE_URL: process.env.TEST_DATABASE_URL || 'mongodb://localhost:27017/myapp-test',
//   JWT_SECRET: process.env.TEST_JWT_SECRET || 'testsecret',
//   LOG_LEVEL: process.env.LOG_LEVEL || 'error',
//   PORT: process.env.PORT || 8080,
// };
