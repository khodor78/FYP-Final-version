const express = require('express');
const errorMiddlewar = require('./middleware/error')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const multer = require('multer');
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

//image


const product = require('./routes/productRoute');
const user = require('./routes/userRoutes');
const personalrouter = require('./routes/personalDetails');
const uploadRouter  = require('./routes/uploadRouter');
app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/personal', personalrouter);
app.use('/api/uploads', uploadRouter);

const __dirnamex = path.resolve();
app.use('/uploads', express.static(path.join(__dirnamex, '/uploads')));
app.use(errorMiddlewar);
module.exports = app;
