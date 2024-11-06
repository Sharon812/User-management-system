const users = require('../models/User')
const loadregistrationpage = async(req,res) => {
    try{
        res.render('registration')

    } catch (error){
        console.log(error.message)
    }
}

const insertUser = async(req,res) => {
    try {
        const { name, email, password } = req.body;
        const user = new users({ name, email, password });

        const userdata = await user.save();
        console.log(userdata)
        if(userdata){
            res.render('registration',{message:"Your registration is success"})
        }else{
            res.render('registration',{message:"YOur registrationn is faiked"})
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports ={
    loadregistrationpage,
    insertUser
} 