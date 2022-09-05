const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { default: mongoose } = require('mongoose');
const ExperienceModel = require('../models/ExperienceModel');

exports.getAllexperience = catchAsyncErrors(async (req, res, next) => {
  let perosnals;
  try {
    perosnals = await ExperienceModel.find().populate();
  } catch (err) {
    return console.log(err);
  }
  if (!perosnals) {
    return next(new ErrorHandler('No Experience Details Found', 401));
  }
  return res.status(200).json({ perosnals });
});

exports.addexperience = catchAsyncErrors(async (req, res, next) => {
  const { organization, Link, Description, Position, Skill, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return next(new ErrorHandler('Unable To Find User By This Ud', 401));
  }

  const exp = new ExperienceModel({
    organization,
    Link,
    Description,
    Position,
    Skill,
    user,
  });
  try {
    const session = await mongoose.startSession();
    await exp.save({ session });
    existingUser.expereincedetails.push(exp);
    await existingUser.save({ session });
  } catch (err) {
    return console.log(err);
    return res.status(500).json({ message: err });
  }

  return res.status(200).json({ project });
});

exports.updateexperience = catchAsyncErrors(async (req, res, next) => {
  const { organization, Link, Description, Position, Skill } = req.body;
  const personalid = req.params.id;
  let personal;
  try {
    personal = await ExperienceModel.findByIdAndUpdate(personalid, {
      organization,
      Link,
      Description,
      Position,
      Skill,
    });
  } catch (err) {
    return console.log(err);
  }

  if (!personal) {
    return next(new ErrorHandler('Unable to update Experience Details', 401));
  }

  return res.status(200).json({ personal });
});

exports.getById = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  let perosnal;
  try {
    perosnal = await ExperienceModel.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!perosnal) {
    return next(new ErrorHandler('No Experience Details Found', 401));
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
    return next(new ErrorHandler('Unable to delete Experience details', 401));
  }
  return res.status(200).json({ message: 'Successfully Deleted' });
});

exports.getByUserId = catchAsyncErrors(async (req, res, next) => {
  const userid = req.params.id;
  let userperosnal;
  try {
    userperosnal = await User.findById(userid).populate('expereincedetails');
  } catch (err) {
    return console.log(err);
  }
  if (!userperosnal) {
    return next(new ErrorHandler('NO Experience Details Found', 401));
  }
  return res.status(200).json({ project: userperosnal });
});
