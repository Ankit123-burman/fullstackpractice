const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_DB)
    .then(()=>{
        console.log('connected to DB');
    }).catch((err)=>{
        console.log('somthing went wrong',err);
    })
}

module.exports = connectDB