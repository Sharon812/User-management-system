const User = require('../models/User')
const users = require('../models/User')
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
            // req.flash('error',"Iz")
             res.render('login', { message: "Invalid Admin Credentials" }); // Provide feedback for incorrect login
        }
    } catch (error) {
        console.log(error.message);
    }
};

//admin render
const admindashrender = async(req,res) => {
    try {
        const userdata =  await users.find({});
        res.render('dash',{user: userdata})
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

//user add 
const addnewuser = async (req,res) => {
    try {
        const { name, email, password } = req.body;

       console.log(req.body)
        const spassword = await bycrypt.hash(password,10)
        const userss = new User({
            name:name,
            email:email,
            password:spassword
        })

        const userData = await userss.save();
        
        if(userData){
         res.redirect('/admin/dashboard')
        }else{
          console.log('ensjidfjiodsjfiodjfio')
        }

    } catch (error) {
        console.log(error.message)
    }
}
//edit user function
const edituser = async (req, res) => {
    try {
      const { id, name, email } = req.body;
  console.log(req.body);
  
      // Find the user by ID and update
    const data =  await users.findByIdAndUpdate(id, { name, email });
      res.redirect('/admin/dashboard'); // Redirect back to dashboard
    } catch (error) {
      console.log(error.message);
    }
  };

  //delete user
  const deleteuser = async (req, res) => {
    try {
      const { id } = req.body; // Extract the ID from the request body
    const userdata =  await users.deleteOne({ _id: id }); // Use the ID to find and delete the user
      res.redirect('/admin/dashboard'); // Redirect back to the dashboard
    } catch (error) {
      console.log(error.message);
      res.status(500).send("An error occurred while deleting the user.");
    }
  };
  
  


module.exports = {
    adminregist,
    verifyadmin,
    admindashrender,
    logout,
    addnewuser,
    edituser,
    deleteuser
}