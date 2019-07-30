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
    default: 'https://banner2.kisspng.com/20180401/dbq/kisspng-user-profile-computer-icons-profile-5ac09245049c32.0935523415225697970189.jpg'
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
    city:{
      type:String,
      require:true,
      default:"Ciudad"
    }
  },
  photosUser:[{
    type: Schema.Types.ObjectId,
    ref:'Folder'}],

  role:{
      type:String,
      enum:['USER','MASTERMIND'],
      default:'USER'
  }

},{
  timestamps:true,
  versionKey:false
})

userSchema.plugin(PLM,{usernameField:'email'})
module.exports = model('User',userSchema)