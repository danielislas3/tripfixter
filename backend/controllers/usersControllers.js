const User = require ('../models/User')

//R
exports.getUsers=(req,res,nex)=>{
  User.find()
  .then(users=>res.status(200).json({users}))
  .catch(err=>res.status(500).json({err}))
} 
//R
exports.getOneUser=(req,res,nex)=>{

  const {id}=req.params
  User.findById(id)
  .then(users=>res.status(200).json({users}))
  .catch(err=>res.status(500).json({err}))
} 
//C
exports.createUser=(req,res,next)=>{
  User.create({...req.body})
.then(user=> res.status(201).json({user}))
.catch(err=> res.status(500).json({err}))
}
//U
exports.updateUser=(req,res,next)=>{
  const {id}= req.params
  User.findByIdAndUpdate(id,{...req.body},{new:true})
  .then(user=> res.status(200).json({user}))
  .catch(err=> res.status(500).json({err}))
}

  // D
exports.deleteUser=(req,res,nex)=>{
  const {id}= req.params
  User.findByIdAndDelete(id)
  .then(user=> res.status(200).json({user, msg:'User deleted'}))
  .catch(err=> res.status(500).json({err}))
  }





