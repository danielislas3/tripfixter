const router = require('express').Router();
const {getOneUser,getUsers,updateUser,deleteUser,createUser} = require('../controllers/usersControllers')
const {getPhotos,getOneFolder}= require('../controllers/foldersControllers')
const uploadCloud= require('../config/cloudinary')
const {upload}= require('../controllers/uploadController')



//REST API USUARIO

//READ 
router.get('/users',getUsers)
//READ 
router.get('/users/:id',getOneUser)
//CREATE 
router.post('/users',createUser)
//UPDATE
router.patch('/users/:id',updateUser)
//DELETEr
router.delete('/users/:id',deleteUser)
/****************FOTOS************ */

//folder de una sesion
router.post('/photos', uploadCloud.single('photos'), upload)



//imagenes
router.get('/photos',getPhotos)
//router.post('/photos',createPhotos)


//todos los folders
router.get('/folders/:id',getOneFolder)






module.exports = router;
