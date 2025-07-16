// code is polluted and need refactoring so we'll be doin MVC for industry standards


// working with mongo Database 

import express from 'express';
import mongoose from 'mongoose';
// import users from './Data/mock_data_build_REST.json' assert { type: "json" };
const app = express();
const port = 8000;


app.use(express.json());  // REQUIRED to parse JSON from Postman
app.use(express.urlencoded({ extended: true }));  //  // for application/x-www-form-urlencoded



// connnection
mongoose
    .connect('mongodb://127.0.0.1:27017/react-app-1')
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Mongo Error", err))

//  schema 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
});
// - schema

// Model
const User = mongoose.model("user", userSchema); // class  -User we can interact with mongo 
// Model

 

// Routes
// grouped

app
    .route("/api/users/:id")
    
    .get(async(req,res)=>{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404);
        return res.json(user);
    })
    
    .patch(async(req,res)=>{
        await User.findByIdAndUpdate(req.params.id,{lastName:"changed"}); // hardcode val
        return res.json({status:"success"});
    })

    .delete(async(req,res)=>{
        await User.findByIdAndDelete(req.params.id); // hardcode val
        return res.json({status:"success"});
    });

// fetching users from daTabase
app.get("/api/users",async(req,res)=>{
   const alldbUsers = await User.find({});  // {} - means all users
   const html = `
   <ul>
    ${alldbUsers
    .map((user)=>`<li>${user.firstName} - ${user.email}</li>`)
    .join("")}
   </ul>
   `;
   res.send(html);
});  

app.get("/api/users", async(req,res)=>{
    const alldbUsers = await User.find({});
    return res.json(alldbUsers);
});

// post 

app.post("/api/users", async (req, res) => {
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
});


app.listen(port, () => console.log(`server started a port:${port}`));


// working get and post @ http://localhost:8000/users/