const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productsRoute = require('./api/routes/products');
const orderRoute = require('./api/routes/order');
const userRoute = require('./api/routes/user');

mongoose.connect('mongodb+srv://'+process.env.MONGO_ATLAS_USERNAME+':'+process.env.MONGO_ATLAS_PW+'@node-product.hqhsa.mongodb.net/'+process.env.MONGO_ATLAS_DATABASE+'?retryWrites=true&w=majority')

app.use(morgan('dev'));

app.use('/upload', express.static('upload'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','POST, PATCH, DELETE, GET');
        res.status(200).json({});
    }
    next();
})

app.use('/products', productsRoute);
app.use('/orders', orderRoute);
app.use('/user', userRoute);

app.use((req, res, next) => {
    const error = new Error('Not Founderd')
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 5000).json({
        error: {
            message: error.message,
            status: error.status
        }
    })
})

module.exports = app;