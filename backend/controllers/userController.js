const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhander");
const sendToken = require("../utils/jwtToken");
const {OAuth2Client} = require('google-auth-library');
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
  
    const user = await User.create({
      name,
      email,
      password,
      personals: [],
     projectdetails: [],
     expereincedetails: [],
     aboutdetails:[],
     skilldetails:[], 
    });
  
    sendToken(user, 201, res);
  });
  exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      return next(new ErrorHandler('Please Enter Email & Password', 400));
    }
  
    const user = await User.findOne({ email }).select('+password');
  
    if (!user) {
      return next(new ErrorHandler('Invalid email or password', 401));
    }
  
    const isPasswordMatched = await user.ComparePassword(password);
  
    if (!isPasswordMatched) {
      return next(new ErrorHandler('Invalid email or password', 401));
    }
  
    sendToken(user, 200, res);
  });
  exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      succes: true,
      message: 'Loggod Out',
    });
  });
  exports.getUserDetail = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  });
  exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');
    const isPasswordMatched = await user.ComparePassword(req.body.oldPassword);
    if (!isPasswordMatched) {
      return next(new ErrorHandler('Old Password is Incorrect', 400));
    }
    if (req.body.newPassword !== req.body.confirmPassword) {
      return next(new ErrorHandler('password does not match', 400));
    }
    user.password = req.body.newPassword;
    await user.save();
    sendToken(user, 200, res);
  });
  exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
    };
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
      required: true,
    });
  
    res.status(200).json({
      success: true,
    });
  });
  //get all User -- admin
  exports.getallUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();
  
    res.status(200).json({
      success: true,
      users,
    });
  });
  //get admin user -- admin
  exports.getSingleUSer = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);
  
    if (!user) {
      return next(
        new ErrorHandler(`user does not exist with Id: ${req.params.id}`)
      );
    }
  
    res.status(200).json({
      success: true,
      user,
    });
  });
  
  //Update User Role -- admin
  exports.updateUserRoles = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
    };
    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
      required: true,
    });
    if (!user) {
      return next(
        new ErrorHandler(`User does not exist with Id: ${req.params.id}`, 400)
      );
    }
  
    res.status(200).json({
      success: true,
    });
  });
  
  //Delete User  -- Admin
  exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(
        new ErrorHandler(`User does not exist with Id: ${req.params.id}`, 400)
      );
    }
    await user.remove();
    res.status(200).json({
      success: true,
      message: 'User Deleted Successfully',
    });
  });
  