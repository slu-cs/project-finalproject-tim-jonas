const mongoose = require('mongoose');

// Schema for a collection of questions
const Question = new mongoose.Schema({
  user_id: String, 
  question: String,
  answer: String
});

// Speed up queries on all fields
Voter.index({user_id: 1});
Voter.index({question: 1});
Voter.index({answer: 1});

// Compile and export this schema
module.exports = mongoose.model('Question', Question);
