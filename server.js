const connectDB = require('./config/DB');
const app  = require('./src/app')
require('dotenv').config()

connectDB()

app.listen(3000,()=>{
    console.log('server is runing on 3000');
})