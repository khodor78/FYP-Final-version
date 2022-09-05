const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutSchema = new mongoose.Schema({
  majorskill: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: [true, 'Please Enter Description of the project'],
  },
  Future: {
    type: String,
    required: [true, 'Please Enter Tags'],
  },
  
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}
)

module.exports = mongoose.model('aboutdetails', AboutSchema);
