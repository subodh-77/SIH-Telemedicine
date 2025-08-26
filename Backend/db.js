const mongoose=require('mongoose');
//Define the mongodb connection url
const mongoUrl='mongodb://localhost:27017/SIH'
mongoose.connect(mongoUrl);
//get the default connection
//Mongoose maintains a default connection object representing the mongdb connection.
const db=mongoose.connection;
//define the event listeners for database connection
db.on('connected',()=>{
    console.log("connected to mongodb server");
});
db.on('disconnected',()=>{
    console.log("disconnected to mongodb server");
});
db.on('error',()=>{
    console.log("error in mongodb server");
});
//export the database connection
module.exports=db;