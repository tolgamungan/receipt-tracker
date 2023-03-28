const express = require('express');
const { auth } = require('../../middlewares');
const {
  createReceipt,
  getReceipts,
  deleteReceipt,
  updateReceipt,
} = require('../../controllers/receipts');

const router = express.Router();

router.post('/', auth, createReceipt);
router.get('/', auth, getReceipts);
router.delete('/:id', auth, deleteReceipt);
router.put('/:id', auth, updateReceipt);

module.exports = router;
