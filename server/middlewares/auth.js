/*jshint esversion: 8 */
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config/default');

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const decodedToken = jwt.verify(token, config.JWT_SECRET);

    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = auth;
