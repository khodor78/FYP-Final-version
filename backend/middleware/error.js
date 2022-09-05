const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req, res, next) =>{
    err.statusCode= err.statusCode || 500;
    err.message = err.message || "Internal Server  Error";

    //Wrong MongoDb Id Error 

    if(err.name ==="CastError"){
        const message = `Resource not Found. Invalid:  ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    //Mongo Duplicate Error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err=new ErrorHandler(message, 400);
    }

//JWT ERROR
    if(err.name === "JsonwebTokenError"){
        const message = `Json Web Token is Invalid, try again`;
        err=new ErrorHandler(message, 400);
    }
    //JWT  Expire ERROR
    if(err.name === "TokenExpiredError"){
        const message = `Json Web Token is Expired, try again`;
        err=new ErrorHandler(message, 400);
    }



    res.status(err.statusCode).json({
        success:false,
        message: err.message,
    });
};