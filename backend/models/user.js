import mongoose from "mongoose";

// schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: String,
  gender: String,
});

// model
const User = mongoose.model("user", userSchema);

export default User;
