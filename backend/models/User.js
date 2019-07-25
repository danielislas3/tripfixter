const {Schema, model} = require ('mongoose')
const PLM = require ('passport-local-mongoose')

const userSchema = new Schema({

  name:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  photo: {
    type: String,
    default: 'https://d1nhio0ox7pgb.cloudfronthttps://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png'
  },
  description:{
    type:String,
    required:true,
    default:"Pequeña descripcion"
  },
  token:String,
  
  location: {
    address: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number],
    city:String
  },
  photosUser:[{
    type: Schema.Types.ObjectId,
    ref:'Folder'}]

},{
  timestamps:true,
  versionKey:false
})

module.exports = model('User',userSchema)