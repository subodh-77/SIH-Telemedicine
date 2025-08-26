const mongoose=require('mongoose');
const appointmentschema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
        required:true
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:["pending","confirmed","completed","cancelled"],
        default:"pending"
    },
    videoLink:{
        type:String
    },
    timestamps:{
        type:Date,
        required:true,
        default:Date.now
    }
});
const appointment=mongoose.model('appointment',appointmentschema);
module.exports=appointment;