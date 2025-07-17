import mongoose from 'mongoose';

// connection
async function connectMongoDb(){
    return  mongoose.connect('mongodb://127.0.0.1:27017/react-app-1')
}
module.exports={
    connectMongoDb,
}; 