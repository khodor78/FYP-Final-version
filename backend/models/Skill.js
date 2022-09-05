const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new mongoose.Schema({
  biography: {
    type: String,
    required: true,
  },
  seeking: {
    type: String,
    required: true,
  },
  hubby: {
    type: String,
    required: [true, 'Please Enter Description of the project'],
  },
  love: {
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

module.exports = mongoose.model('skilldetails', SkillSchema);
