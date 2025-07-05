import express from 'express';
const app = express();

app.get("/",function(req,res){
    res.send('hello user');
})


app.get("/profile",function(req,res){
    res.send('hello harshal');

})

app.listen(3000);