
const isLogin = async (req, res, next) => {
    try {
        if (req.session.admin) {
            // Proceed to the next middleware if logged in
            return next();
        }
        // Redirect to login page if not logged in
        return res.redirect('/admin');
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error');
    }
};

const islogout = async (req, res, next) => {
    try {
        if (req.session.admin) {
            // Redirect to dashboard if already logged in
            return res.redirect('/admin/dashboard');
        }
        // Proceed to the next middleware if logged out
        return next();
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    isLogin,
    islogout
};
