 import fs from "fs";
 function logReqRes(filename){
    return (req,res,next)=>{
        fs.appendFile(
            filename,
            `\n${Date.now()}:${req.ip} ${req.mwthod}: ${req.path}\n`,
             (err,data)=>{
                next();
             }
        );
    };
 }
 module.exports = {
    logReqRes
 };