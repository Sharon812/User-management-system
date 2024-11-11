const user = require('../models/User')
const bycrypt = require('bcrypt')

//admin page rendering
const adminregist = async (req,res) => {
    try {
        res.render('adminloginpage')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports ={
    adminregist
}