const config = require('./config');
const app = require('../app');

const port = config.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
