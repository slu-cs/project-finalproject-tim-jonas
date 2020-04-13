const mongoose = require('mongoose');
const connect = require('./db');
const User = require('./users');
const Question = require('./questions');

// Connect to the database
connect();

// fake data for users
const users = [
  new User({user_id: 'timjones', first_name: 'tim', last_name: 'jones'}),
  new User({user_id: 'jpeek', first_name: 'jonas', last_name: 'peek'}),
  new User({user_id: 'kira_murphy', first_name: 'kira', last_name: 'murphy'}),
  new User({user_id: 'harrypotter', first_name: 'harry', last_name: 'potter'}),
  new User({user_id: 'ronw', first_name: 'ron', last_name: 'weasley'}),
  new User({user_id: 'jpattz', first_name: 'jack', last_name: 'pattison'})
];

// fake data for questions
const questions = [
  new Question({user_id: 'timjones', question: 'what is my favorite color?', options: ['red', 'blue', 'green', 'yellow'], answer: 'blue'}),
  new Question({user_id: 'timjones', question: 'what is my home state?', options: ['florida', 'new york', 'new hampshire'], answer: 'new hampshire'}),
  new Question({user_id: 'jpeek', question: 'favorite sport?', options: ['hockey', 'soccer', 'foosball'], answer: 'foosball'}),
  new Question({user_id: 'jpeek', question: 'eye color', options: ['brown', 'blue', 'green'], answer: 'blue'}),
  new Question({user_id: 'jpeek', question: 'number of siblings', options: ['0', '1', '2'], answer: '1'}),
  new Question({user_id: 'jpattz', question: 'age', options: ['19', '20', '21', '22'], answer: '21'}),
  new Question({user_id: 'jpattz', question: 'undergrad collge', options: ['harvard', 'unh', 'SLU'], answer: 'SLU'})
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(users.map(user => user.save())))
  .then(() => Promise.all(questions.map(question => question.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
