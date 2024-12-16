const express = require('express')
const admin_route = express()
const nocache = require('nocache')

const session = require('express-session')
admin_route.use(session({
    secret:"mysitesession",
    resave:false,
    saveUninitialized:true,
}));
admin_route.use(express.json());
admin_route.use(express.urlencoded({ extended: true }))
const flash = require('express-flash')


admin_route.use(flash())
admin_route.use(nocache())
//initialising bodyparserrsz
admin_route.set('view engine','ejs');
admin_route.set('views','./views/admin')

const auth = require('../middleware/authadmin')
const user = require('../middleware/auth')


const admincontroller = require('../controller/admincontroller');
//admin login page rendering
admin_route.get('/',auth.islogout,user.isLogout,admincontroller.adminregist)

//admin login page post verification
admin_route.post('/',admincontroller.verifyadmin)

//dashboard rendering
admin_route.get('/dashboard', auth.isLogin, user.isLogout,admincontroller.admindashrender)

//logout admin dash
admin_route.get('/logoutt',auth.isLogin,user.isLogout, admincontroller.logout)

//to add new user
admin_route.post('/add-new',admincontroller.addnewuser)

//to edit new user
admin_route.post('/edit-user',admincontroller.edituser)

//to deleteuser
admin_route.post('/delete-user',admincontroller.deleteuser)

//to search
admin_route.get('/search',admincontroller.searchUsers)

// admin_route.get('/admin/new-user',auth.isLogin,admincontroller)

admin_route.get("/dashboard/contact", auth.isLogin, admincontroller.contact);
module.exports= admin_route;