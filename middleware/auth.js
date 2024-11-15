//
const isLogin = async (req, res, next) => {
    try {
        if (req.session.user_id) {}
            // User is logged in, proceed to the next middleware or route handler
            else {
            // User is not logged in, redirect to login page
            res.redirect('/login');
        }next()
    } catch (error) {
        console.log(error.message);
    }
};

const isLogout = async(req,res,next) => {
    try {
       
        if(req.session.user_id){
            res.redirect("/home")
            
        } next() 

    } catch (error) {
        console.log(error.message);
    }
}
module.exports={
    isLogin,
    isLogout
}