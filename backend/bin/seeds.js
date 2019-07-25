const User = require ('../models/User')
const mongoose = require ('mongoose')

mongoose.connect(process.env.DB ,{useNewUrlParser:true})


const users = [

  {
    name:'Usuario1',
    lastName:'Perez',
    email:'user@user.com'
  },
  {
    name:'Usuario2',
    lastName:'Lopez',
    email:'user2@user.com'
  }
]


  User.create(users)
    .then(e=>{
      console.log('usuarios creados: '+e)
    })
    .catch(err=>{
      console.log(err)
    })
  