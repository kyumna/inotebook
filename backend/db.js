const mongoose=require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/chat";


const connectToMongo= async()=>{
 mongoose.connect(mongoURI,() => {
        console.log('Connected to Mongo');

    })
    
}

module.exports=connectToMongo