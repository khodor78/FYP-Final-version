const express = require('express');
const { registerUser, loginUser, logout, getUserDetail, updatePassword, updateProfile, getallUsers, getSingleUSer, updateUserRoles, deleteUser, googlelogin } = require('../controllers/userController');
const router = express.Router();
const { isAuthenticatedUser, authorizedRoles } = require('../middleWare/auth');
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);

router.route('/me').get(isAuthenticatedUser, getUserDetail);
router.route('/passowrd/update').put(isAuthenticatedUser, updatePassword);
router.route('/me/update').put(isAuthenticatedUser, updateProfile);
router
  .route('/admin/users')
  .get(isAuthenticatedUser, authorizedRoles('admin'), getallUsers);
router
  .route('/admin/users/:id')
  .get(isAuthenticatedUser, authorizedRoles('admin'), getSingleUSer)
  .put(isAuthenticatedUser, authorizedRoles('admin'), updateUserRoles)
  .delete(isAuthenticatedUser, authorizedRoles('admin'), deleteUser);


module.exports = router;
