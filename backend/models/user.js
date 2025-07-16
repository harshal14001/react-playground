import mongoose from "mongoose";
// schema
const userSchema = new mongoose.Schema(
    {
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
        },
    }
);
// model
const User = mongoose.model("user", userSchema); // class  -User we can interact with mongo

module.exports=User;