/*jshint esversion: 8 */
const { Receipt } = require('../models');

const createReceipt = async (req, res, next) => {
  try {
    const { name, date, totalAmount, taxAmount, items } = req.body;
    const user = req.user._id;

    const receipt = await Receipt.create({
      name,
      date,
      totalAmount,
      taxAmount,
      items,
      user,
    });

    res.status(201).json(receipt);
  } catch (error) {
    next(error);
  }
};

const getReceipts = async (req, res, next) => {
  try {
    const user = req.user._id;

    const receipts = await Receipt.find({ user });

    res.json(receipts);
  } catch (error) {
    next(error);
  }
};

const deleteReceipt = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.user._id;

    const receipt = await Receipt.findOneAndDelete({ _id: id, user });

    if (!receipt) {
      return res.status(404).json({ message: 'Receipt not found' });
    }

    res.json(receipt);
  } catch (error) {
    next(error);
  }
};

const updateReceipt = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.user._id;

    const receipt = await Receipt.findOneAndUpdate(
      { _id: id, user },
      { $set: req.body },
      { new: true }
    );

    if (!receipt) {
      return res.status(404).json({ message: 'Receipt not found' });
    }

    res.json(receipt);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createReceipt,
  getReceipts,
  deleteReceipt,
  updateReceipt,
};
