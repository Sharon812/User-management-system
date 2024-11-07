const express = require('express');
const user_route = express();

//setting view engine
user_route.set('view engine','ejs')
user_route.set('views','./views/users')

//initialising bodyparser
const bodyparser = require('body-parser')
user_route.use(bodyparser.json())
user_route.use(bodyparser.urlencoded({extended:true}))

const usercontroller = require('../controller/usercontroller');

//register route
user_route.get('/register',usercontroller.loadregistrationpage);
user_route.post('/register',usercontroller.insertUser);

//landing page route
user_route.get('/',usercontroller.landingpage);


//exporting routes
module.exports = user_route;