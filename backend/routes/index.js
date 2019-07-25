const router = require('express').Router();
const {getOneUser,getUsers,updateUser,deleteUser,createUser} = require('../controllers/usersControllers')


//REST API

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


module.exports = router;
