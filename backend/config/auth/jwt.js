const jwt = require('jsonwebtoken')
const User = require('../../models/User')

exports.createToken = user => {
  return jwt
    .sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role
      },
      process.env.SECRET,
      { expiresIn: '24h' }
    )
    .split('.')
}
//checar si el usuario esta logueado

exports.verifyToken=(req,res,next)=>{
  const { headload, signature } = req.cookies
  if(!headload||!signature)return res.status(401).json({msg:'Unauthorized, missing token3'})

  jwt.verify(headload+signature, process.env.SECRET,(err,decoder)=>{
    
    if(err) res.status(401).json({msg:'Unauthorized, missing token2'})
    //verificar si el token pertenece al usuario
    User.findById(decoder.userId)
    .then(user=>{
      req.user=user
      next()
    })
    .catch(err=>{
      res.status(404).json({err})
      next()
    })
  })
}