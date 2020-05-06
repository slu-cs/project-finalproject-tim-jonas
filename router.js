const express = require('express');
const home = require('./controller/home');
const questions = require('./controller/questions');
const users = require('./controller/users');
const permissions = require('./controller/permissions');

// Create the router
const router = express.Router();

// Check for user status on question create
const authorize_question_create = function(request, response, next) {
  console.log(`User name: ${request.session.name}, Request Body: ${request.body.user_id}`)
  if (request.session.name === request.body.user_id) {
    next(); // Fulfill the request
  } else {
    response.status(401).end();
  }
};

// Check for user status on retrieve questions
const authorize_question = function(request, response, next) {
  console.log(`User name: ${request.session.name}, Request Param: ${request.params.user_id}`)
  console.log(`User has permission: ${request.session.name === request.params.user_id}`)
  if (request.session.name === request.params.user_id) {
    next(); // Fulfill the request
  } else {
    response.redirect(`/permissions/wrong_user`);
    response.status(401).end();
  }
};

// Check for user status on retrieve questions
const authorize_question_update = function(request, response, next) {
  console.log(`User name: ${request.session.name}, Request Param: ${request.query.user_id}`)
  console.log(`User has update/delete permission: ${request.session.name === request.query.user_id}`)
  if (request.session.name === request.query.user_id) {
    next(); // Fulfill the request
  } else {
    response.redirect(`/permissions/wrong_user`);
    response.status(401).end();
  }
};

const is_logged_in = function(request, response, next) {
  console.log(`User is logged in: ${request.session.name && request.session.name !== 'DOES_NOT_EXIST'}`)
  if (request.session.name && request.session.name !== 'DOES_NOT_EXIST') {
    next(); // Fulfill the request
  } else {
    response.redirect(`/permissions/no_user`);
    response.status(401).end();
  }
};

router.get('/', home.retrieve);

// Handle question requests
router.get('/questions', is_logged_in, questions.index);
router.get('/questions/:user_id', is_logged_in, questions.retrieve);
router.get('/questions/user/:user_id', authorize_question, questions.retrieve_user);

router.post('/questions', authorize_question_create, questions.create);
router.delete('/questions/:user_id', authorize_question_update, questions.delete);
router.put('/questions/:user_id', authorize_question_update, questions.update);


// Handle user requests
router.get('/users', users.index);
router.post('/users', users.create);
router.get('/users/create-user', users.create_user);

// Handle permissions requests
router.get('/permissions/no_user', permissions.no_user);
router.get('/permissions/user_already_exists/:user_id', permissions.user_already_exists);
router.get('/permissions/wrong_user', permissions.wrong_user);


// Export the router
module.exports = router;
