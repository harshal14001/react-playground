import User from "../models/user"


// controller are function we attach with our routes

// seperated route from backend > index.js into function = handleGetAllUser

// router.get("/", async (req, res) => {
//     const alldbUsers = await User.find({});
//     return res.json(alldbUsers);
// });

async function handleGetAllUsers(req,res) {
     const alldbUsers = await User.find({});
    return res.json(alldbUsers);
}
module.exports = {
    handleGetAllUsers
}