import express from 'express';

// mongo connection from connection.js
import connectMongoDb from "./connection.js";

import logReqRes from "./middlewares/index.js"; // here no need to say /index in front bcoz it knows
import userRouter from "./routes/user.js";

// auth route
import userRouter from "./routes/auth-user.js"  

const app = express();
const port = 8000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/react-app-1")

// connnection in single file but we will do seperately , generally we put in seperate file
//  see in connection.js  
// mongoose
//     .connect('mongodb://127.0.0.1:27017/react-app-1')
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => console.log("Mongo Error", err))

// middleware - plugin
app.use(express.urlencoded({ extended: false }));  // for application/x-www-form-urlencoded

// access middleware from seperate folder middleware>index.js
app.use(logReqRes("log.txt"));

// Routes 
app.use("api/users", userRouter); // if there is any request at '/user' then use userRouter

// auth - route
app.use("/auth-user",userRouter);

app.listen(port, () => console.log(`server started a port:${port}`));
