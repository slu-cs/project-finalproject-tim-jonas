const express = require('express');
const questions = require('./controllers/questions');
const users = require('./controllers/users');

// Create the router
const router = express.Router();

// Handle question requests
router.get('/questions', questions.index);
router.get('/questions/:user_id', questions.retrieve);

// Handle user requests
router.get('/users', users.index);
router.get('/users/:user_id', users.retrieve);

// Export the router
module.exports = router;