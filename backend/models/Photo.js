const {Schema, model} = require ('mongoose')


const PhotoSchema = new Schema({

  url:String,

  _creator:{
    type:Schema.Types.ObjectId,
    ref: 'User'}

},
{
  timestamps:true,
  versionKey:false
})

module.exports = model('Photo',PhotoSchema)