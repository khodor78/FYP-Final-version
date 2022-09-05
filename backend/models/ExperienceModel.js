const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experiencescehma = new mongoose.Schema({
  organization: {
    type: String,
    required: true,
  },
  Link: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: [true, 'Please Enter Description of the project'],
  },
  Position: {
    type: String,
    required: [true, 'Please Enter Tags'],
  },
  Skill: {
    type: String,
    required: [true, 'Please Enter Date of Publshing' ],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}
)

module.exports = mongoose.model('expereincedetails', experiencescehma);
