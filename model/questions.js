const mongoose = require('mongoose');

// Schema for a collection of questions
const Question = new mongoose.Schema({
  user_id: String, 
  question: String,
  answer: String,
  options: [String]
});

// Speed up queries on all fields
Question.index({user_id: 1});
Question.index({question: 1});
Question.index({options: 1});
Question.index({answer: 1});

// Compile and export this schema
module.exports = mongoose.model('Question', Question);
