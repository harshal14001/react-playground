import User from "../models/auth-user"

async function handleUSerSignup(req,res) {
    const {name,email,password} =req.body;
    await User.create({
        name,
        email,
        password, 
    }); 
    return req.render("home");  // if user signup then send back to home page
}
export default handleUSerSignup;