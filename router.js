const express = require('express');
const questions = require('./controller/questions');
const users = require('./controller/users');

// Create the router
const router = express.Router();

// Check for admin status
const authorize = function(request, response, next) {
  if (request.session.admin) {
    next(); // Fulfill the request
  } else {
    response.status(401).end();
  }
};

// Handle question requests
router.get('/questions', questions.index);
router.get('/questions/:user_id', questions.retrieve);

router.post('/questions', questions.create);
router.delete('/questions/:user_id', authorize, questions.delete);
router.put('/questions/:user_id', questions.update);


// Handle user requests
router.get('/users', users.index);
router.post('/users', users.create);




// Export the router
module.exports = router;
