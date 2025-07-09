// basic express 

// syntax app.METHOD(PATH,HANDLER)

//  app is an inntance of express
//  method is a http req
// path is path on server
// handler is a function executed route is matched

import express from 'express';
const app = express();

app.get("/",function(req,res){
    res.send('hello user ');
})


app.get("/profile",function(req,res){
    res.send('hello harshal');

})

app.listen(3000);