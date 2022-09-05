const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({
  Title: {
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
  Tags: {
    type: String,
    required: [true, 'Please Enter Tags'],
  },
  Date: {
    type: String,
    required: [true, 'Please Enter Date of Publshing' ],
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

module.exports = mongoose.model('projectdetails', projectSchema);
