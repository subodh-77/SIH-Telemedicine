const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userschema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String
    },
    email:{
        type:String,
        unique:true,
    },
    Gender:{
        type:String,
        enum:["Male","female","Other"]
    },
    dob:{
      type:Date,
      required:true  
    }
});
userschema.pre('save',async function(next){
    const user=this;
    //Hash the password only if it has been modified(or is new)
    if(!user.isModified('password')) return next();
   try{
    //hash the password generation
    const salt=await bcrypt.genSalt(10);//generate random salt of letter 10
    //hash password
    const hashPassword=await bcrypt.hash(user.password,salt);
    //override the plain password with hash password
    user.password= hashPassword;
   }catch(err){
    return next(err);
   }
});
userschema.methods.comparePassword=async function(candidatepassword){
    try{
        const isMatch=await bcrypt.compare(candidatepassword,this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}
const user=mongoose.model('user',userschema);
module.exports=user;
