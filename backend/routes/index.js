const router = require('express').Router();
const passport = require ('../config/auth/passport')
const uploadCloud= require('../config/cloudinary')
const {getOneUser,getUsers,updateUser,deleteUser,createUser,updateImageUser} = require('../controllers/usersControllers')
const {getPhotos,getOneFolder, createFolder}= require('../controllers/foldersControllers')
const {upload,uploadOne}= require('../controllers/uploadController')
const {createRequest,getRequest,getOneRequest,updateRequest,getOneByUser,getAllbyUserPhotographer,getOneByUserPhotographer,getAllByUser} = require('../controllers/requestControllers')
const {login,logout,signup,profile} = require('../controllers/auth/auth.controller')
const {verifyToken}= require('../config/auth/jwt')



///LOGIN
router.post('/signup',signup)
router.post('/login',passport.authenticate('local'),login)
router.get('/logout',logout)
router.get('/profile',verifyToken,profile)


//REST API USUARIO

//READ 
router.get('/users',getUsers)
//READ 
router.get('/users/:id',getOneUser)
//CREATE 
router.post('/users',createUser)
//UPDATE
router.patch('/users/:id',updateUser)
router.post('/upload', uploadCloud.single('photo'), uploadOne)
//DELETEr
router.delete('/users/:id',deleteUser)
/****************REQUEST************ */
router.post('/request',createRequest)

//todos los request que el usuario ha creado
router.get('/request/userCreados/:user',getAllByUser)
// request que 
//router.get('/request/user/:user',getOneByUser)
/// request que el fotografo tiene

router.get('/request/userP/:userPhoto',getOneByUserPhotographer)
/// todos los request que el fotografo ha recibido

router.get('/request/userAll/:userPhoto',getAllbyUserPhotographer)

router.get('/request/:id',getOneRequest)


router.patch('/request/:id',updateRequest)
router.get('/request',getRequest)
/****************FOTOS************ */

//folder de una sesion

//para un archivo: uploadCloud.single('photos')
router.post('/photos', uploadCloud.array('photos', 10), upload)



//imagenes
router.get('/photos',getPhotos)
//router.post('/photos',createPhotos)


//todos los folders
router.get('/folders/:id',getOneFolder)
router.post('/folders',createFolder)






module.exports = router;
