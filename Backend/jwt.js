//IN THIS FILE WE IMPLEMENT AUTHENTICATION WITH THE HELP OF TOKEN
const jwt=require('jsonwebtoken');


const jwtAuthMiddleware=(req,res,next)=>{
    //first check request headers has authorization or not
    const authorization=req.headers.authorization;
    if(!authorization) return res.status(401).json({error:'token not found'});
    //extract the jwt token from the request headers
    const token=req.headers.authorization.split(' ')[1];//.split is used because the  client sends a token in the header like this:Bearer space token(Bearer <token_here>) that why we insert bearer at 0 index and than space and store token at first index
    if(!token) return res.status(401).json({error:'not found'});
    try{
        //verify jwt token
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        //attach user information to the request object(If the token is valid, you extract the user info from it and attach it to req.user. Now your routes can know "who" is making the request.)
        console.log(decoded);
        req.user=decoded;
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({error:'Unauthorized'});
    }
}


//function to generate Jwt token
const generateToken=(userdata)=>{
    //GENERATE a new jwt token using user data
    return jwt.sign(userdata,process.env.JWT_SECRET,{expiresIn:3000});
}
module.exports={jwtAuthMiddleware,generateToken};