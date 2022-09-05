const projectdetails = require('../models/project');
const User = require('../models/userModel');

const ErrorHandler = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { default: mongoose } = require('mongoose');
const multer = require('multer');

exports.getAllproject = catchAsyncErrors(async (req, res, next) => {
  let perosnals;
  try {
    perosnals = await projectdetails.find().populate();
  } catch (err) {
    return console.log(err);
  }
  if (!perosnals) {
    return next(new ErrorHandler('No Project Details Found', 401));
  }
  return res.status(200).json({ perosnals });
});

exports.addproject = catchAsyncErrors(async (req, res, next) => {
  const { Title, Link, Description, Tags, Date, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return next(new ErrorHandler('Unable To Find User By This Ud', 401));
  }

  const project = new projectdetails({
    Title,
    Link,
    Description,
    Tags,
    Date,
    image,
    user,
  });
  try {
    const session = await mongoose.startSession();

    await project.save({ session });
    existingUser.projectdetails.push(project);
    await existingUser.save({ session });
  } catch (err) {
    return console.log(err);
    return res.status(500).json({ message: err });
  }

  return res.status(200).json({ project });
});

exports.updateproject = catchAsyncErrors(async (req, res, next) => {
  const { 
    Title,
    Link,
    Description,
    Tags,
    Date,
    image } =
    req.body;
  const personalid = req.params.id;
  let personal;
  try {
    personal = await projectdetails.findByIdAndUpdate(personalid, {
        Title,
        Link,
        Description,
        Tags,
        Date,
        image,
    });
  } catch (err) {
    return console.log(err);
  }

  if (!personal) {
    return next(new ErrorHandler('Unable to update project Details', 401));
  }

  return res.status(200).json({ personal });
});

exports.getById = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  let perosnal;
  try {
    perosnal = await projectdetails.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!perosnal) {
    return next(new ErrorHandler('No Project Details Found', 401));
  }
  return res.status(200).json({ perosnal });
});

exports.deleteBYid = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  let perosnal;
  try {
    perosnal = await projectdetails.findByIdAndRemove(id).populate('user');
    await perosnal.user.personals.pull(perosnal);
    await perosnal.user.save();
  } catch (err) {
    return console.log(err);
  }
  if (!perosnal) {
    return next(new ErrorHandler('Unable to delete Personal details', 401));
  }
  return res.status(200).json({ message: 'Successfully Deleted' });
});

exports.getByUserId = catchAsyncErrors(async (req, res, next) => {
  const userid = req.params.id;
  let userperosnal;
  try {
    userperosnal = await User.findById(userid).populate('projectdetails');
  } catch (err) {
    return console.log(err);
  }
  if (!userperosnal) {
    return next(new ErrorHandler('NO Personal Details Found', 401));
  }
  return res.status(200).json({ project: userperosnal });
});
