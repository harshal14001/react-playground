import User from "../models/user.js";

// controller are function we attach with our routes

// seperated route from backend > index.js into function = handleGetAllUser


// only 1 eg below code is from routes/user.js of GET all users
// router.get("/", async (req, res) => {
//     const alldbUsers = await User.find({});
//     return res.json(alldbUsers);
// });

// 1 get all users
async function getAllUsers(req, res) {
    const alldbUsers = await User.find({});
    return res.json(alldbUsers);
}

// 2 get user by ID
async function getUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
}

// 3 post ~ add user
async function addUser(req, res) {
    const body = req.body;

    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });

    return res.status(201).json({ msg: "Success", user: result });
}

// 4 patch ~ edit/update user
async function editUser(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "changed" }); // hardcode val
    return res.json({ status: "success" });
}

// 5 delete user by ID
async function deleteUser(req, res) {
    await User.findByIdAndDelete(req.params.id); // hardcode val
    return res.json({ status: "success" });
}

export {getAllUsers, getUserById, addUser, editUser, deleteUser };
