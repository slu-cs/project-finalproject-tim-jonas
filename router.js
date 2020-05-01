const express = require('express');
const home = require('./controller/home');
const questions = require('./controller/questions');
const users = require('./controller/users');

// Create the router
const router = express.Router();

router.get('/', home.retrieve);

// Handle question requests
router.get('/questions', questions.index);
router.get('/questions/:user_id', questions.retrieve);
router.get('/questions/user/:user_id', questions.retrieve_user);

router.post('/questions', questions.create);
router.delete('/questions/:user_id', questions.delete);
router.put('/questions/:user_id', questions.update);


// Handle user requests
router.get('/users', users.index);
router.post('/users', users.create);
router.get('/users/create-user', users.create_user);


// Export the router
module.exports = router;
