import mongoose from 'mongoose';

// we've created different connection file of database from backend>index.js line no 12
// connection
async function connectMongoDb(url){
    return  mongoose.connect(url)
}
module.exports={
    connectMongoDb
}; 