const Solicitud = require('../models/Request')

exports.createRequest=(req,res,next)=>{

  Solicitud.create({...req.body})
.then(soli=> res.status(201).json({soli}))

.catch(error=> res.status(500).json({error}))

}

exports.getRequest=(req,res,nex)=>{
  Solicitud.find()
  .then(soli=>res.status(200).json({soli}))
  .catch(err=>res.status(500).json({err}))
} 

exports.getOneRequest=(req,res,nex)=>{

  const {id}=req.params
  Solicitud.findById(id)
  .then(soli=>res.status(200).json({soli}))
  .catch(err=>res.status(500).json({err}))
} 
exports.getOneByUser=(req,res,nex)=>{
  const {user}=req.params
  Solicitud.findOne({user})
  .then(request=>{
    res.status(200).json({request})})
  .catch(err=>res.status(500).json({err}))
} 
exports.getAllByUser=(req,res,nex)=>{
  const {user}=req.params
  Solicitud.find({user}).populate({
    path : 'userPhoto',
    populate : {
      path : 'user'
    }
  })
  .then(request=>{
    res.status(200).json({request})})
  .catch(err=>res.status(500).json({err}))
} 
exports.getAllbyUserPhotographer=(req,res,nex)=>{
  const {userPhoto}=req.params
  Solicitud.find({userPhoto})
  .then(request=>{
    console.log(request)
    res.status(200).json({request})})
  .catch(err=>res.status(500).json({err}))
} 
exports.getOneByUserPhotographer=(req,res,nex)=>{
  const {userPhoto}=req.params
  Solicitud.findOne({userPhoto})
  .then(request=>{
    console.log(request)
    res.status(200).json({request})})
  .catch(err=>res.status(500).json({err}))
} 

exports.updateRequest=(req,res,net)=>{
  const {id}= req.params
  Solicitud.findByIdAndUpdate(id,{...req.body},{new:true})
  .then(soli=> res.status(200).json({soli}))
  .catch(err=> res.status(err.status || 500).json({
    message: err.message,
    error: err
  }))
}