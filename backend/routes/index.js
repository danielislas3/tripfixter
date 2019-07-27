const router = require('express').Router();
const passport = require ('../config/auth/passport')
const uploadCloud= require('../config/cloudinary')
const {getOneUser,getUsers,updateUser,deleteUser,createUser} = require('../controllers/usersControllers')
const {getPhotos,getOneFolder, createFolder}= require('../controllers/foldersControllers')
const {upload}= require('../controllers/uploadController')
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
//DELETEr
router.delete('/users/:id',deleteUser)
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
