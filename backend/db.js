const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/'

mongoose.set("strictQuery", false);
const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log('Connecting to mongoDb successfully')
    })
}
module.exports = connectToMongo;