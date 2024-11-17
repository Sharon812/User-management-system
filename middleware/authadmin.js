// const iflogin = async (req, res, next) => {
//     try {
//         if (req.session.admin) {
//             next(); // Proceed to the requested route
//         } else {
//             res.redirect('/admin'); // Redirect to admin login
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("An error occurred");
//     }
// };

// const iflogout = async (req, res, next) => {
//     try {
//         if (req.session.admin) {
//             res.redirect('/admin/dashboard'); // Redirect to dashboard if logged in
//         } else {
//             next(); // Allow access to the requested route
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("An error occurred");
//     }next()
// };

// module.exports = {
//     iflogin,
//     iflogout,
// };
const isLogin = async (req,res,next) => {
    try {
        
        if(req.session.admin){}
        else{
            res.redirect('/admin')
        }
        next()

    } catch (error) {
        console.log(error.message)
    }
}

const islogout = async (req,res,next) =>{
    try {
        if(req.session.admin){
            res.redirect('/admin/dashboard')
        }
        next()


    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = {
    isLogin,
    islogout
}