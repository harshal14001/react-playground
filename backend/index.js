import express from 'express';
import mongoose from 'mongoose';

//
import userRouter from './routes/user'

const app = express();
const port = 8000;


app.use(express.json());  // REQUIRED to parse JSON from Postman
app.use(express.urlencoded({ extended: true }));  // for application/x-www-form-urlencoded

 
// connnection , this can be also put in seperate file
mongoose
    .connect('mongodb://127.0.0.1:27017/react-app-1')
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Mongo Error", err))

// Routes 
app.use("/user",userRouter); // if there is any request at '/user' then use userRouter
 
app.listen(port, () => console.log(`server started a port:${port}`));
