const express = require('express');
const { auth } = require('../../middlewares');
const {
  createUser,
  loginUser,
  getUsers,
} = require('../../controllers/users');

const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/', auth, getUsers);

module.exports = router;
