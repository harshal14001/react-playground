import express from 'express';
const app = express();

// middleware-1
app.use(function(req,res,next){
    console.log("Hello in M-1");
    next();
});

// middleware-2 by bit different way
app.use((req,res,next)=>{
    console.log("Hello in M-2");
    next();
});

//Route-1
app.get('/',function(req,res){
    res.send("In Route");
});

//Route-2
app.get('/home',function(req,res){
    res.send("In Home");
});


app.listen(3000);
