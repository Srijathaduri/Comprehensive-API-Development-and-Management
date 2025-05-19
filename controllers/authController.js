const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User =require("../models/User");

exports.login=async (req,res)=>{
    const { email, password } = req.body;


const user = await User.findOne({ email});
if(!user) return res.status(401).json({error : 'Invalid credentials'});

const isMatch = await bcrypt.compare(password ,user.password);
if(!isMatch) return res.status(401).json({error : 'Invalid credentials'})
const token = jwt.sign({userId : user._id},process.env.JWT_SECRET,{
  expiresIn : '1h' ,

});

 res.status(200).json({token});

}
