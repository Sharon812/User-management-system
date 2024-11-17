const user = require('../models/User')
const bycrypt = require('bcrypt')

//admin page rendering
const adminregist = async (req,res) => {
    try {
        res.render('login')
    } catch (error) {
        console.log(error.message)
    }
}
//to verify admin credentials
const verifyadmin = async (req, res) => {
    try {
        const adminname = "admin";
        const adminpass = "admin123";

        const username = req.body.name;
        const password = req.body.password;

        if (username === adminname && password === adminpass) {
            req.session.admin = { username: adminname };
             res.redirect('/admin/dashboard'); // Use return to prevent further execution
        } else {
             res.render('login', { message: "Invalid Admin Credentials" }); // Provide feedback for incorrect login
        }
    } catch (error) {
        console.log(error.message);
    }
};

const admindashrender = async(req,res) => {
    try {
        res.render('dash')
    } catch (error) {
        console.log(error.message)
    }
}

//logout 
const logout = async (req,res) => {
    try {
        
        req.session.destroy()
        res.redirect('/admin')

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    adminregist,
    verifyadmin,
    admindashrender,
    logout
}