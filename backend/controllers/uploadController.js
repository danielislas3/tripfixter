const Photos = require('../models/Photo')

exports.upload=(req,res)=>{
  //guarda en la base de datos solo el id sin la url

  Photos.create({...req.body, img:req.files.url})//id
  .then(photos=> {
    res.status(201).json({...photos})})


}
