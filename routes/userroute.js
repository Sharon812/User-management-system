const express = require('express');
const user_route = express();
const session = require('express-session')
const nocache = require('nocache')
//exporting config
//exporting auth
const auth = require('../middleware/auth')
//setting up session
user_route.use(session({
    secret:"mysitesession",
    resave:false,
    saveUninitialized:true,
}));
user_route.use(nocache())

//initialising bodyparserrsz
user_route.use(express.json());-
user_route.use(express.urlencoded({ extended: true }));

//setting view engine
user_route.set('view engine','ejs')
user_route.set('views','./views/users')

//user controller
const usercontroller = require('../controller/usercontroller');
//admin controller
const admin = require('../middleware/authadmin')

//register route
user_route.get('/register',auth.isLogout,admin.isligin,usercontroller.loadregistrationpage);
user_route.post('/register',usercontroller.insertUser);

//landing page route
user_route.get('/',auth.isLogout,admin.isligin,usercontroller.landingpage);
``
//to go to login page from landingp page



//login page route
user_route.get('/login',auth.isLogout,admin.isligin,usercontroller.loginpage);
//user home page verification
user_route.post('/login',usercontroller.verifylogin)

//user home page route
user_route.get('/home',auth.isLogin,admin.isligin,usercontroller.renderuserhome)

//logout from user homepage rout
user_route.get('/logout',usercontroller.logoout)
//exporting routes

// //admin dashboard route
// user_route.get('/admindashboard',authadmin.isAdminAuthenticated,admincontroller.admindashrender,)
module.exports = user_route;