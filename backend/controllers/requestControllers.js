const Solicitud = require('../models/Request')

exports.createRequest=(req,res,next)=>{

  Solicitud.create({...req.body})
.then(soli=> res.status(201).json({soli}))

.catch(error=> res.status(500).json({error}))

}