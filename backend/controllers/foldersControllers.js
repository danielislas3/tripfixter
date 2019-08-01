const Folder = require ('../models/Folder')
const Photos = require('../models/Photo')
const User = require('../models/User')


exports.getFolders=(req,res,nex)=>{
  Folder.find()
  .then(folder=>res.status(200).json({folder}))
  .catch(err=>res.status(500).json({err}))
} 

exports.getOneFolder=(req,res,nex)=>{

  const {user}=req.params
  Folder.find({user}).populate("photos")
  .then(folders=> res.status(200).json({folders}))
  .catch(err=>res.status(500).json({err}))
} 


//FOTOS
exports.getPhotos=(req,res,nex)=>{
  const {id}=req.params.id
  Photos.findById(id).populate('user')
  .then(photos=>res.status(200).json({photos}))
  .catch(err=>res.status(500).json({err}))
} 
exports.getAllPhotos=(req,res,nex)=>{
  const {id}=req.params
  Photos.find().populate("User")
  .then(photos=>res.status(200).json({photos}))
  .catch(err=>res.status(500).json({err}))
} 
//FOLDER Y FOTOS
exports.createFolder = (req, res) => {
  const {photos, _creator} = req.body
  const photosPromisse = []
  photos.map((photo,i) => photosPromisse.push(Photos.create({img: photo, _creator})))
  Promise.all(photosPromisse)
  .then( imgsArr => {

    const photosId = imgsArr.map(img => img._id)
    Folder.create({
      photos: photosId,
      _creator
    })
    User.findByIdAndUpdate(_creator,{$push:{photosUser:photosId}})
    .then(result => {
      res.status(201).json({message: 'created'})
    })
  })

}