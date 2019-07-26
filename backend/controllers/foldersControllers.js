const Folder = require ('../models/Folder')
const Photos = require('../models/Photo')


exports.getFolders=(req,res,nex)=>{
  Folder.find()
  .then(folder=>res.status(200).json({folder}))
  .catch(err=>res.status(500).json({err}))
} 

exports.getOneFolder=(req,res,nex)=>{

  const {id}=req.params
  Folder.findById(id)
  .then(folders=>res.status(200).json({folders}))
  .catch(err=>res.status(500).json({err}))
} 


//FOTOS
exports.getPhotos=(req,res,nex)=>{
  Photos.find()
  .then(photos=>res.status(200).json({photos}))
  .catch(err=>res.status(500).json({err}))
} 

