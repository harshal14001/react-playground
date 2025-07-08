// basic HTTP server using Node.js and handles routing based on the URL path and query parameters

import http from "http";
import fs from "fs";
import url from "url"; 

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} new req recieved \n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);

    fs.appendFile("log.txt",log,(err,data)=>{
        
        switch(myUrl.pathname){
            
            case "/":
                res.end("Homepage");
                break;

            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi,${username}`);
                break;

            case "/search":
                const search = myUrl.query.search_query;
                res.end("Here are your results for" + search);
            
            default:
                res.end("404 not found");
        }
    })

})

myServer.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
}); 