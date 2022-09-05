
  const express = require('express');
  const moment = require('moment');
const { getallskill, addskill, updateabout, getById, deleteBYid, getByUserId } = require('../controllers/skillcontroller');
 const SkillRouting = express.Router();
  

  
 SkillRouting.get('/', getallskill);
 SkillRouting.post('/add', addskill);
 SkillRouting.put('/update/:id', updateabout);
 SkillRouting.get('/:id', getById);
 SkillRouting.delete('/:id', deleteBYid);
 SkillRouting.get('/user/:id', getByUserId);
  
  module.exports = SkillRouting;
  