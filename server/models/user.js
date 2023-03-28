/*jshint esversion: 8 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

userSchema.pre('save', async function(next) { //defining a pre-save middleware function that hashes the user's password before saving it to the database
  try {
    if (!this.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;

    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);

    return isMatch;
  } catch (error) {
    return next(error);
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
