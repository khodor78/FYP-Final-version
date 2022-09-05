const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Your Name'],
    maxLength: [30, 'Name cannot exceed 30 Character'],
    minLength: [4, 'Name Should have more than 4 Character'],
  },
  email: {
    type: String,
    required: [true, 'Please Enter Your Email'],
    unique: true,
    validate: [validator.isEmail, 'Please Enter a Valid Email'],
  },
  password: {
    type: String,
    required: [true, 'Please Enter Your Password'],
    minLength: [8, 'Password Should be greater than 8 Characters'],
    select: false,
  },

  role: {
    type: String,
    default: 'user',
  },
  personals: [
    { type: mongoose.Types.ObjectId, ref: 'personalDetails', required: true },
  ],
  projectdetails: [
    { type: mongoose.Types.ObjectId, ref: 'projectdetails', required: true },
  ],
  expereincedetails: [
    { type: mongoose.Types.ObjectId, ref: 'expereincedetails', required: true },
  ],
  aboutdetails: [
    { type: mongoose.Types.ObjectId, ref: 'aboutdetails', required: true },
  ],
  skilldetails: [
    { type: mongoose.Types.ObjectId, ref: 'skilldetails', required: true },
  ],
  resetPasswordToken: String,
  restPasswordExpire: Date,
});
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.getJWTToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

userSchema.methods.ComparePassword = async function (enterredPassword) {
  return await bcrypt.compare(enterredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
