const {
  getAllPersonal,
  addpersonal,
  updatepersonal,
  getById,
  deleteBYid,
  getByUserId,
} = require('../controllers/PersonalDetails');
const express = require('express');
const moment = require('moment');
const multer = require('multer');
const personalrouter = express.Router();





personalrouter.get('/', getAllPersonal);
personalrouter.post('/add', addpersonal);
personalrouter.put('/update/:id', updatepersonal);
personalrouter.get('/:id', getById);
personalrouter.delete('/:id', deleteBYid);
personalrouter.get('/user/:id', getByUserId);

module.exports = personalrouter;
