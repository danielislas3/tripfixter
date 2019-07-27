const User = require('../../models/User')
const {createToken}= require('../../config/auth/jwt')

exports.signup=(req,res,next)=>{
  User.register({...req.body, role:'USER'},req.body.password)
  .then(user=>res.status(201).json({user}))
  .catch(err=>res.status(500).json({err}))
}

exports.login=(req,res,next)=>{
  //si el usuario ya esta logueado passport lo pone en req.user
  const {user}= req
  const [header,payload,signature] = createToken(user)
  //cookie que tiene header y payload (para la seguridad de medium)
  res.cookie('headload', `${header}.${payload}.`,{
    maxAge:1000*60*30,
    secure:true
  })
  //segundo cookie
  res.cookie('signature',signature,{
    httpOly:true,
    secure:true
  })
  // aqui ya estamos logueados
  res.status(200).json({user})
}
exports.logout=(req,res,nex)=>{
  res.clearCookie('headload')
  res.clearCookie('signature')
  res.status(200).json({msg:'Logged out'})
}

exports.profile=(req,res,next)=>{
  res.status(200).json({user:req.user,msg:'Oh señor tienes el poder'})
}