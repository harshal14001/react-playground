import express from 'express';
import users from './Data/mock_data_build_REST.json' assert { type: "json" };

const app = express();
const port = 8000;

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
        return res.json(user);
    })
    
    .patch((req,res)=>{
        // edit user with ID
        return res.json({status: "pending"});
    })
    
    .delete((req,res)=>{
        // delete user with ID
        return res.json({status: "pending"});

    })

// 5. 
app.post("/api/users",(req,res)=>{
    // Create new user
    return res.json({status: "pending"});

});


app.listen(port,()=>console.log(`server started at port:${port} `));
