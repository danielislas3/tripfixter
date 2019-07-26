const { Schema, model} = require('mongoose')

const FolderSchema = new Schema({
  title:String,

  photos: [{
    type: Schema.Types.ObjectId,
    ref: 'Photo'
  }],

  date: String,

  
  _creator:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  
  location: {
    address: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number],
    city:String
  }
})
module.exports = model('Folder',FolderSchema)
// {
//   "title":"Folder uno",
//   "photos":[""]

// }