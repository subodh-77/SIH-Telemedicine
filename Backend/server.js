    const express = require('express')
    const app = express()
    const db=require('./db');
    const bodyParser=require('body-parser');
    const appointment = require('./Models/Appointment');
    app.use(bodyParser.json());
    app.use(express.json());
    const Userroute=require('./Routes/Userroute');
    const appointmentroute=require('./Routes/appointmentroute');
    app.use('/user',Userroute);
    app.use('/appointment',appointmentroute);
    require('dotenv').config();
    app.listen(process.env.Port,()=>{
        console.log("port is running");
    });