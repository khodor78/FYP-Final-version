
  const express = require('express');
  const moment = require('moment');
  const multer = require('multer');
const { getAllproject, addproject, updateproject, getById, deleteBYid, getByUserId } = require('../controllers/projectcontrollers');
  const projectRouter = express.Router();
  
  
  
  
  
  projectRouter.get('/', getAllproject);
  projectRouter.post('/add', addproject);
  projectRouter.put('/update/:id', updateproject);
  projectRouter.get('/:id', getById);
  projectRouter.delete('/:id', deleteBYid);
  projectRouter.get('/user/:id', getByUserId);
  
  module.exports = projectRouter;
  