const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system");

const express = require('express');
const app = express();
app.use(express.static('public'));
//for user route
const userroute = require('./routes/userroute')
app.use('/',userroute);
//for admin route
const adminroute = require('./routes/adminroute')
app.use('/admin',adminroute);

//servre port
//server port
app.listen(3001,() => {
    console.log("server started on port 3001 ")
})

