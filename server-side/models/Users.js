const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sentAt:{
    type: Date,
    default: Date.now
  },
  handled:{
    type: Boolean,
    default: false
  }
},

);

module.exports = mongoose.model('users', UserSchema);


