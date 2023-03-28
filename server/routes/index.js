const express = require('express');
const router = express.Router();
const receiptsRouter = require('./receipts');
const usersRouter = require('./users');
const authRouter = require('./auth');

router.use('/receipts', receiptsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);

module.exports = router;
