//
const isLogin = async (req, res, next) => {
    try {
        if (req.session.user_id) {
            // User is logged in, proceed to the next middleware or route handler
            return next();
        } else {
            // User is not logged in, redirect to login page
            return res.redirect('/login');
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
};


const isLogout = async (req, res, next) => {
    try {
        if (req.session.user_id) {
            // User is logged in, redirect to the home page
            return res.redirect("/home");
        } else {
            // User is logged out, proceed to the next middleware or route handler
            return next();
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
};

module.exports={
    isLogin,
    isLogout
}