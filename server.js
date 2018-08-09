/**** Require statements ***/
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./app/config/config.js');
const customerSDK = require('@livechat/chat.io-customer-sdk');

//Initialise app.
const app = express();


/** MongoDb Database Connection */
mongoose.connect(config.db, { useNewUrlParser: true });
mongoose.connection.on('connected', function(err){
    if(err) throw err;
    console.log('Mongoose, default connection open to '+ config.db);
});

/** Middleware */
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views/pages');
app.use(bodyParser.urlencoded({extended: false}));


/** Routes */
const routes = require('./app/routes/routes');
app.use('/chat',routes);


/** Start Application */
app.listen(config.port, function(err, res){
    if(err) throw err;
    console.log("Server started. Please go to localhost:3000");
});