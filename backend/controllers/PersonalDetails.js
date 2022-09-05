const personalDetails = require('../models/personalDetails');
const User = require('../models/userModel');

const ErrorHandler = require('../utils/errorhander');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { default: mongoose } = require('mongoose');
const multer = require('multer');





exports.getAllPersonal = catchAsyncErrors(async (req, res, next) => {
  let perosnals;
  try {
    perosnals = await personalDetails.find().populate();
  } catch (err) {
    return console.log(err);
  }
  if (!perosnals) {
    return next(new ErrorHandler('No Personal Details Found', 401));
  }
  return res.status(200).json({ perosnals });
});

exports.addpersonal = catchAsyncErrors(async (req, res, next) => {
  const {
    firstname,
    lastname,
    email,
    biography,
    characteristics,
    image,
    user,
  
  } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return next(new ErrorHandler('Unable To Find User By This Ud', 401));
  }


  const personal = new personalDetails({
    firstname,
    lastname,
    email,
    biography,
    characteristics,
    image,
    user,


  });
  try {
    const session = await mongoose.startSession();

    await personal.save({ session });
    existingUser.personals.push(personal);
    await existingUser.save({ session });
  } catch (err) {
    return console.log(err);
    return res.status(500).json({ message: err });
  }

  return res.status(200).json({ personal });
});

exports.updatepersonal = catchAsyncErrors(async (req, res, next) => {
  const { firstname, lastname, email, biography, characteristics, image } =
    req.body;
  const personalid = req.params.id;
  let personal;
  try {
    personal = await personalDetails.findByIdAndUpdate(personalid, {
      firstname,
      lastname,
      email,
      biography,
      characteristics,
      image,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!personal) {
    return next(new ErrorHandler('Unable to update Perosnal Details', 401));
  }

  return res.status(200).json({ personal });
});

exports.getById = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  let perosnal;
  try {
    perosnal = await personalDetails.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!perosnal) {
    return next(new ErrorHandler('No Personal Details Found', 401));
  }
  return res.status(200).json({ perosnal });
});

exports.deleteBYid = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  let perosnal;
  try {
    perosnal = await personalDetails.findByIdAndRemove(id).populate('user');
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
    userperosnal = await User.findById(userid).populate('personals');
  } catch (err) {
    return console.log(err);
  }
  if (!userperosnal) {
    return next(new ErrorHandler('NO Personal Details Found', 401));
  }
  return res.status(200).json({ personals: userperosnal });
});
