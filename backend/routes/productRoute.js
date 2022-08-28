const express = require("express");
const { createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");
const { isAuthenticatedUser } = require("../middleWare/auth");
const router = express.Router();


router.route("/products/new").post(isAuthenticatedUser, createProduct);
router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);
module.exports = router;