// run>  node server.js then in browser visit> http://localhost:3000/ 
import { logReqRes } from './middlewares/index.js';
import { createServer } from 'http';
const server = createServer(function(req,res){
    res.end("server created");
})
server.listen(3000);