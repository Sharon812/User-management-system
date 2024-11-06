const express = require('express');
const user_route = express();

user_route.set('view engine','ejs')
user_route.set('views','./views/users')


const bodyparser = require('body-parser')
user_route.use(bodyparser.json())
user_route.use(bodyparser.urlencoded({extended:true}))

const usercontroller = require('../controller/usercontroller');

user_route.get('/register',usercontroller.loadregistrationpage);
user_route.post('/register',usercontroller.insertUser);

module.exports = user_route;