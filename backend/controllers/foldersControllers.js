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
exports.createPhotos=(req,res,nex)=>{
    Photos.create({...req.body})
    .then(photos=>res.status(201).json({photos}))
    .catch(err=>res.status(500).json({err}))
 
}
exports.createFolder = (req, res) => {
  // Extraes los valores que te envía el usuario desde la página de creación del folder
  console.log(req.body)
  console.log(req.body.photos[1])
  console.log(req.body._creator)
  const {photos, _creator} = req.body

  // Creas un arreglo con las promesas de la creación de cada foto en mongo
  const photosPromisse = []
  // iteras las fotos que recibes del usuario para extraer solo la url y agregar al creador
  // con esto generas el create que responde con una promesa sin resolver
  photos.map((photo,i) => photosPromisse.push(Photos.create({img: photo, _creator})))
  // Con PromisseAll resuelves cada promesa dentro del arreglo que generamos por cada foto
  Promise.all(photosPromisse)
  .then( imgsArr => {
    //Una vez resueltas las promesas, mongo te devuelve un arreglo con los elementos creados en Mongo
    // con ello extraemos solo los ID para referenciarlos al Folder
    const photosId = imgsArr.map(img => img._id)
    // Creamos el folder en función de las fotos ya guardadas en mongo
    Folder.create({
      photos: photosId,
      _creator
    })
    .then(result => {
      // Una vez generado el Folder, respondemos al usuario con un mensaje
      res.status(201).json({message: 'created'})
    })
  })

}