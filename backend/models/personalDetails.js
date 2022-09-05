const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const personalSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Please Enter Your Email'],
  },
  biography: {
    type: String,
    required: [true, 'Please Enter Your biography'],
  },
  characteristics: {
    type: String,
    required: [true, 'Please Enter Your Characyeristics'],
  },
  image: {
    type: String,
    required: [true, 'Please Ener Your image'],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}
)

module.exports = mongoose.model('personalDetails', personalSchema);
