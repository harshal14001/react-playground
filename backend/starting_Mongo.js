import express from 'express';
import fs from "fs";
import mongoose from 'mongoose';
import users from './Data/mock_data_build_REST.json' assert { type: "json" };
import { type } from 'os';
const app = express();
const port = 8000;

// connnection
mongoose
    .connect('mongodb://127.0.0.1:27017/react-app-1')
    .then(()=>console.log("MongoDB connected"))
    .catch((err)=>console.log("Mongo Error",err))
// connnection


//  schema 
const userSchema = new mongoose.Schema({
    fName:{
        type: String,
        required:true,
    },
    lName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    }
});
// - schema

// Model
const User = mongoose.model("user",userSchema); // class  -User we can interact with mongo 
// Model

app
    .route("/api/users/:id")

        .get((req,res)=>{
            const id = req.params.id;
            const user = users.find((user)=>user.id===Number(id)); // find user by id which match searched
            if(!users){
              return res.status(404).json({error:"User not found"}) // status handle
            }
            return res.json(user);
        })

        .patch((req,res)=>{
            // edit user with ID 
            return res.json({status: "pending"});
        }) 
    
        // delete user with ID
        
        .delete( (req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
          return res.status(404).json({ status: "User not found" });
        }

        users.splice(userIndex, 1); // remove the user

        // Write updated users array back to the JSON file
        fs.writeFile('./Data/mock_data_build_REST.json', JSON.stringify(users), (err) => {
          if (err) {
            return res.status(500).json({ status: "Error deleting user" });
          }
          return res.json({ status: "Deleted", id });
        });
});    

app.listen(port,()=>console.log(`server started a port:${port}`));
