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
;

admin_route.set('view engine','ejs');
admin_route.set('views','./views/admin')

const auth = require('../middleware/authadmin')


const admincontroller = require('../controller/admincontroller');
//admin login page rendering
admin_route.get('/',auth.islogout,admincontroller.adminregist)

//admin login page post verification
admin_route.post('/',admincontroller.verifyadmin)

//dashboard rendering
admin_route.get('/dashboard', auth.isLogin, admincontroller.admindashrender)

//logout admin dash
admin_route.get('/logoutt',auth.isLogin, admincontroller.logout)

//to add new user
admin_route.post('/add-new',admincontroller.addnewuser)

//to edit new user
admin_route.post('/edit-user',admincontroller.edituser)

//to deleteuser
admin_route.post('/delete-user',admincontroller.deleteuser)

// admin_route.get('/admin/new-user',auth.isLogin,admincontroller)

module.exports= admin_route;