//
import express from "express";
import handleUSerSignup from "../controllers/auth-user";
const router = express.Router();

// sign up route
Router.post('/',handleUSerSignup);


export default router;