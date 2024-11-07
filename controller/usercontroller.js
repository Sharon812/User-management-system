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

//to insert user
const insertUser = async(req,res) => {
    try {
        //bycrypt using
        const secpass = await securepassword(req.body.password)
        //inserting user
        const user = new users({
            name:req.body.name,
            email:req.body.email,
            password:secpass
        })


        //saving data to databasse
        const userdata = await user.save();
        console.log(userdata)
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

//exporting
module.exports ={
    loadregistrationpage,
    insertUser,
    landingpage
} 