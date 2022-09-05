const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { default: mongoose } = require('mongoose');
const About = require('../models/About');

exports.getallabout = catchAsyncErrors(async (req, res, next) => {
  let perosnals;
  try {
    perosnals = await About.find().populate();
  } catch (err) {
    return console.log(err);
  }
  if (!perosnals) {
    return next(new ErrorHandler('No About Details Found', 401));
  }
  return res.status(200).json({ perosnals });
});

exports.addabout = catchAsyncErrors(async (req, res, next) => {
  const { majorskill, experience, Description, Future, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return next(new ErrorHandler('Unable To Find User By This Ud', 401));
  }

  const exp = new About({
    majorskill,
    experience,
    Description,
    Future,
    user,
  });
  try {
    const session = await mongoose.startSession();
    await exp.save({ session });
    existingUser.aboutdetails.push(exp);
    await existingUser.save({ session });
  } catch (err) {
    return console.log(err);
    return res.status(500).json({ message: err });
  }

  return res.status(200).json({ About });
});

exports.updateabout = catchAsyncErrors(async (req, res, next) => {
  const { majorskill, experience, Description, Future } = req.body;
  const personalid = req.params.id;
  let personal;
  try {
    personal = await About.findByIdAndUpdate(personalid, {
      majorskill,
      experience,
      Description,
      Future,
      
    });
  } catch (err) {
    return console.log(err);
  }

  if (!personal) {
    return next(new ErrorHandler('Unable to update About Details', 401));
  }

  return res.status(200).json({ personal });
});

exports.getById = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  let perosnal;
  try {
    perosnal = await About.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!perosnal) {
    return next(new ErrorHandler('No About Details Found', 401));
  }
  return res.status(200).json({ perosnal });
});

exports.deleteBYid = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  let perosnal;
  try {
    perosnal = await ExperienceModel.findByIdAndRemove(id).populate('user');
    await perosnal.user.personals.pull(perosnal);
    await perosnal.user.save();
  } catch (err) {
    return console.log(err);
  }
  if (!perosnal) {
    return next(new ErrorHandler('Unable to delete About details', 401));
  }
  return res.status(200).json({ message: 'Successfully Deleted' });
});

exports.getByUserId = catchAsyncErrors(async (req, res, next) => {
  const userid = req.params.id;
  let userperosnal;
  try {
    userperosnal = await User.findById(userid).populate('aboutdetails');
  } catch (err) {
    return console.log(err);
  }
  if (!userperosnal) {
    return next(new ErrorHandler('NO About Details Found', 401));
  }
  return res.status(200).json({ project: userperosnal });
});
