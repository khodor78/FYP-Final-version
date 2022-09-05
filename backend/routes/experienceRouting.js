
  const express = require('express');
  const moment = require('moment');
const { getAllexperience, addexperience, updateexperience, getById, deleteBYid, getByUserId } = require('../controllers/experiencecontrollers');
 const experienceRouting = express.Router();
  

  
 experienceRouting.get('/', getAllexperience);
 experienceRouting.post('/add', addexperience);
 experienceRouting.put('/update/:id', updateexperience);
 experienceRouting.get('/:id', getById);
 experienceRouting.delete('/:id', deleteBYid);
 experienceRouting.get('/user/:id', getByUserId);
  
  module.exports = experienceRouting;
  