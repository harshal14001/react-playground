import express from 'express';
import users from './Data/mock_data_build_REST.json' assert { type: "json" };
import fs from "fs";
import { error } from 'console';


const app = express();
const port = 8000;

//- add plugin ie middleware to work on data sent from postman>post>urlencoded

app.use(express.urlencoded({extended:false}));
// -

// Routes
// 1. see data is HTML, suitable browser etc
app.get("/users",(req,res)=>{
   const html = `
   <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
   </ul>
   `;
   res.send(html);
})

// 2. this will throw json data suitable for flutter, react , alexa ,smart devices
app.get("/api/users/",(req,res)=>{
    return res.json(users);
})

// 3. id - handled in 4 but wrote seperate for understanding
app.get("/api/users/:id",(req,res)=>{
    const id = req.params.id;
    const user = users.find((user)=>user.id===Number(id)); // find user by id which match searched
    return res.json(user);

})

// post and patch are problematic bcoz browser bydeafult do GET  
  
//4. for same routes but differnt methode we will work below
// check 3
// done Grouping   

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

// 5. 
app.post("/api/users",(req,res)=>{
    // Create new user
    const body = req.body; // data sent from frontend is available in req.body
    
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender  || !body.job_title)
        return res.status(400).json({msg:"all fields are requied"})
      
    // console.log("body:",body);// here we can reciece the post but to append in file we need to ude fs mod
   
    users.push({...body,id:users.length+1}); // append in file but problm is we need to write in file also (usnig fs module) 
   
    fs.writeFile('./Data/mock_data_build_REST.json',JSON.stringify(users),(err,data)=>{
       return res.status(201).json({status: "Sucess",id:users.length}); // added status code 201 means creare user
       
    })

});


app.listen(port,()=>console.log(`server started at port:${port} `));
