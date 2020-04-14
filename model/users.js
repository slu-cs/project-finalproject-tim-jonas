const mongoose = require('mongoose');

// Schema for a collection of questions
const User = new mongoose.Schema({
  user_id: String, 
  first_name: String,
  last_name: String
});

// Speed up queries on all fields
User.index({user_id: 1});
User.index({first_name: 1});
User.index({last_name: 1});

// Compile and export this schema
module.exports = mongoose.model('User', User);
