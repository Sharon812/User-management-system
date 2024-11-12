const users = require('../models/User')
const bycrypt = require('bcrypt')

//converting into a hash string

const securepassword = async (password) =>{
    try {
        const hashpass = await bycrypt.hash(password,10);
        return hashpass;
    } catch (error) {
        console.log(error.message)
    }
}

//registration page rendering
const loadregistrationpage = async(req,res) => {
    try{
        res.render('registration')

    } catch (error){
        console.log(error.message)
    }
}

//login page rendering
const loginpage = async(req,res) => {
    try {
        res.render('loginpage')
    } catch (error) {
        console.log(error.message);
    }
}

//to insert user
const insertUser = async(req,res) => {
    try {
        console.log(req.body);
        //bycrypt using
        const secpass = await securepassword(req.body.password)
        //inserting user
        console.log(secpass)
        const user = new users({
            name:req.body.name,
            email:req.body.email,
            password:secpass
        })
        
        

        //saving data to databasse
        const userdata = await user.save();
        console.log(userdata,"ho")
        if(userdata){
            res.render('registration')
        }else{
            res.render('registration')
        }
    } catch (error) {
        console.log(error.message)
    }
}

//Home 1rst page rendering
const landingpage = async (req,res) => {
    try {
        res.render('landingpage')
    } catch (error) {
        console.log(error.message)
    }
}
//to render to create new user in login page
const rendertoregis = async (req,res) => {
     res.render('registration')
}

//to render the login page on landing page
const loginrend = async (req,res) => {
    res.render('loginpage')
}

//to verify login
const verifylogin = async (req,res) => {
    try {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;       
       const userdata =  await users.findOne({email:email})

       if(userdata){
         console.log(userdata)
     const passwordmatch =  await  bycrypt.compare(password,userdata.password)
       if(passwordmatch){
           res.redirect('userhomepage')
       }else{
        res.render('loginpage',{message:"Email and password is incorrect"})
       }    

       }else{
        console.log("here")
        res.render('loginpage',{message:"Email and Password is incorrect"})
       }

    } catch (error) {
        console.log(error.message);
    }
}

//user home page route
const renderuserhome = async (req,res) => {
    try {
        res.render('userhomepage');
    } catch (error) {
        console.log(error)
    }
}

//exporting
module.exports ={
    loadregistrationpage,
    insertUser,
    landingpage,
    loginpage,
    rendertoregis,
    loginrend,
    renderuserhome,
    verifylogin
} 