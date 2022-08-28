const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const productModel = require("../models/productModel");
const ErrorHandler = require("../utils/errorhander");

//Create Product
exports.createProduct = async (req, res, next) => {
  const product = await productModel.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
      book = await productModel.findByIdAndUpdate(id, req.body);
      await book.save();
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: 'Unable To UPDATE' });
    }
    return res.status(201).json({ book });
  });
  exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await productModel.findById(req.params.id);
  
    if (!product) {
      return res.status(500).json({
        success: false,
        message: 'Product not found',
      });
    }
    await product.remove();
    res.status(200).json({
      success: true,
      message: 'Product Delete Success',
    });
  });
  exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await productModel.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHandler('Product not Found', 404));
    }
    res.status(200).json({
      succes: true,
      product,
    });
  });

  