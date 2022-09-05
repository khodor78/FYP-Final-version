
  const express = require('express');
  const moment = require('moment');
const { getallabout, addabout, updateabout, getById, deleteBYid, getByUserId } = require('../controllers/aboutcontroller');
 const aboutRouting = express.Router();
  

  
 aboutRouting.get('/', getallabout);
 aboutRouting.post('/add', addabout);
 aboutRouting.put('/update/:id', updateabout);
 aboutRouting.get('/:id', getById);
 aboutRouting.delete('/:id', deleteBYid);
 aboutRouting.get('/user/:id', getByUserId);
  
  module.exports = aboutRouting;
  