const mongoose = require('mongoose');
const connect = require('./db');
const User = require('./users');
const Question = require('./questions');

// Connect to the database
connect();

// fake data for users
const users = [
  new User({user_id: '', first_name: '', last_name: ''}),
  new User({user_id: '', first_name: '', last_name: ''}),
  new User({user_id: '', first_name: '', last_name: ''}),
  new User({user_id: '', first_name: '', last_name: ''}),
  new User({user_id: '', first_name: '', last_name: ''}),
  new User({user_id: '', first_name: '', last_name: ''})
];

// fake data for questions
const questions = [
  new Question({user_id: '', question: '', answer: ''}),
  new Question({user_id: '', question: '', answer: ''}),
  new Question({user_id: '', question: '', answer: ''}),
  new Question({user_id: '', question: '', answer: ''}),
  new Question({user_id: '', question: '', answer: ''}),
  new Question({user_id: '', question: '', answer: ''}),
  new Question({user_id: '', question: '', answer: ''})
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(users.map(user => user.save())))
  .then(() => Promise.all(questions.map(question => question.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));