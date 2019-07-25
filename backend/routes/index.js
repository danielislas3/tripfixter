const router = require('express').Router();

const {getOneUser,getUsers,updateUser,deleteUser,createUser} = require('../controllers/usersControllers')

router.get('/users',getUsers)

router.get('/users/:id',getOneUser)

router.post('/users',createUser)



//USUARIOS


//REST API
//CREATE  FOOD
// router.post('/foods',createFood)

// //READ FOODS
// router.get('/foods',getAllFoods)

// //READ FOOD (detail)
// router.get('/foods/:id',getOneFood)

// //UPDATE FOOD
// router.patch('/foods/:id',updateFood)

// //DELETE FOOD
// router.delete('/foods/:id',deleteFood)


module.exports = router;
