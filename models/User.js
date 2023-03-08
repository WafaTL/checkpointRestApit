const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
   passeword: {
      type: String,
      required:true
    },
   age: {
      type: String,
      default: 20
    }
  },
  {timestamps: true}
);

const User = mongoose.model('User', userSchema)

module.exports = User