const express = require('express');
const questions = require('./controller/questions');
const users = require('./controller/users');

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