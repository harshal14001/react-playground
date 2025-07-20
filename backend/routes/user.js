import express from "express";
const router = express.Router();
import {getAllUsers, getUserById, addUser, editUser, deleteUser } from "../controllers/user.js";

// i ve removed /user from everywhere from code compared to previous files
// get request on '/' then wil get all users
// req on '/:id' then will get user on that particular id

// app.get("/users", async (req, res) => {
//     const alldbUsers = await User.find({});  // {} - means all users
//     const html = `
//     <ul>
//         ${alldbUsers
//         .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
//         .join("")}
//     </ul> 
//     `;
//     res.send(html);
// });  

// we are seperating this in controller > index.js ,
// bellow commented 2 lines are basically controllers arn are used in controller > index.js
// router.get("/", getAllUsers); // refactored route
//=> { 
// const alldbUsers = await User.find({});
// return res.json(alldbUsers);
//});

router.route("/").get(getAllUsers .post(addUser))

router
  .route("/:id")
  // get user by id
  // * refactored get user by ID here > .get(getUserById); 
  // .get(async (req, res) => {
  //     const user = await User.findById(req.params.id);
  //     if (!user) return res.status(404).json({ error: "user not found" });
  //     return res.json(user);
  // })
  .get(getUserById)
  
  // update user by id
  // .patch(async (req, res) => {
  //     await User.findByIdAndUpdate(req.params.id, { lastName: "changed" }); // hardcode val
  //     return res.json({ status: "success" });
  // })
  .patch(editUser)

  // delete user by id
  // .delete(async (req, res) => {
  //   await User.findByIdAndDelete(req.params.id); // hardcode val
  //   return res.json({ status: "success" });
  // });
  .delete(deleteUser);

// post - add new user
// router.post("/", async (req, res) => {
//   const body = req.body;
//   if (
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.job_title
//   ) {
//     return res.status(400).json({ msg: "All fields are required" });
//   }

//   const result = await User.create({
//     firstName: body.first_name,
//     lastName: body.last_name,
//     email: body.email,
//     gender: body.gender,
//     jobTitle: body.job_title,
//   });

//   return res.status(201).json({ msg: "Success", user: result });
// });
// router.post("/", addUser);



export default router;
