const User = require('../models/User.js');
const NodeCache = require('node-cache');
const cache = new NodeCache({stdTTL:60})


exports.createUser= async (req, res,next )=>{
  try{
    const {name, email, phone} =req.body;
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('All fields are required')
    }

    const user = await User.create({name, email, phone})
    cache.del('allUsers');
    res.status(201).json(user);
  }catch(err){
   next(err)
  }
}; 





exports.getUsers = async (req,res ,next )=>{
    try{
        const cacheUsers = cache.get('allUsers')
        if(cacheUsers){
          return res.status(200).json(cacheUsers)
        }
    const user = await User.find({},'name email').lean();
    cache.set('allUsers',users);
    res.status(200).json(users)
}catch(err){
    next(err);
}
}

exports.getUserById = async (req,res ,next )=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user) {
            res.status(404);
            throw new Error ('User not found')
        }
        res.status(200).json(user);
    }catch(err){
       next(err)
    }
};


exports.updateUser=async (req, res,next )=>{
    try{
        const upadated = await User.findByIdAndUpdate(req.params.id, req.body,{ new: true})
        if(!upadated){
            res.status(404);
            throw new Error ("User not found");
        }
        cache.del('allUsers');
        res.status(200).json(upadated);

    }catch(err){
             next(err);
    }
}; 

exports.deleteUser = async (req, res ,next ) =>{
    try{
        const deleted = await User.findByIdAndDelete(req.params.id)
        if(!deleted){
            res.status(404);
            throw new Error('User not found')
        }
        cache.del('allUsers');
        res.status(200).json({message : "User deleted successfully"})
    }catch(err){
              next(err);
    }
};
