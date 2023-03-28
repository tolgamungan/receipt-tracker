const auth = require('./auth');
const error = require('./error');

// by exporting an object that contains all the middleware functions, 
// we can import them all at once in other parts of the application
module.exports = {
  auth,
  error,
};
