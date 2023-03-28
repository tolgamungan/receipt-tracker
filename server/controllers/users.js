/*jshint esversion: 8 */
const { User } = require('../models');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use' });
    }

    const user = await User.create({ name, email, password });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const isMatch = await user.checkPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    const token = user.generateAuthToken();

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });

    res.json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  loginUser,
  getUsers,
};
