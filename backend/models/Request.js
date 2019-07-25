const { Schema, model} = require('mongoose')

const RequestSchema = new Schema({

  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  userPhoto:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  msg:{
    type:String,
    required:true
  },
  location: {
    address: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number],
    city:String
  },

  date:String,

  state:{
    type:String,
    enum:['PENDIENTE','CURSO','FINALIZADA','CANCELADA'],
    default:'PENDIENTE'
  }
  
})
module.exports = model('Request',RequestSchema)