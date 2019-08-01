const Photos = require('../models/Photo')

exports.upload = (req,res) => res.status(201).json({files: req.files})

exports.uploadOne=(req,res)=>res.status(201).json({photo:req.file.url})

