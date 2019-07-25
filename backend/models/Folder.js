const { Schema, model} = require('mongoose')

const FolderSchema = new Schema({
  photos: [{
    type: Schema.Types.ObjectId,
    ref: 'Photo'
  }],

  date: String,

  location: {
    address: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number],
    city:String
  },

  title:String,

  _creator:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
  
})
