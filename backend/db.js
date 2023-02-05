const mongoose = require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/'
const database = 'iNoteBook'
mongoose.set("strictQuery", false);
const connectToMongo = async() =>{
    try{
        await mongoose.connect(`${mongoURI}${database}`);
        console.log('Connecting to mongoDb successfully')
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connectToMongo;