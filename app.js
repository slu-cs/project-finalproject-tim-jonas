const express = require('express');
const router = require('./router');
const session = require('express-session');
const connect = require('./db');

// Connect to the database
connect();

// Create the server
const app = express();

// Configure the views
app.set('view engine', 'ejs');
app.set('views', './views');

// Parse request bodies like query strings
app.use(express.urlencoded({extended: false}));

 app.use(session({
   name: 'quiz', // Name of client cookies
   secret: 'temporary', // Password for client cookies
   resave: false, // Recommended setting
   saveUninitialized: false // Recommended setting
 }));

// Ignore icon requests
app.get('/favicon.ico', function(request, response) {
  response.status(204).end();
});

// Log requests to the console
app.use(function(request, response, next) {
  console.log('--------------------------', new Date().toLocaleTimeString());
  console.log(request.method, request.url);
  console.log('Body =', request.body);
  next();
});

// Login and show the logged in user's questions
app.get('/login', function(request, response) {
  console.log(`Logging in ${request.query.user_id}`)
  request.session.name = request.query.user_id;
  response.redirect(`/questions/user/${request.session.name}`);
});

// Logout the current user and return to the home page
app.get('/logout', function(request, response) {
  request.session.name = undefined;
  response.redirect('/');
});

// Make the mode available in all views
app.use(function(request, response, next) {
  response.locals.name = request.session.name;
  response.locals.admin = request.session.admin;
  next();
});

// Route content requests
app.use('/', router);

// Handle undefined routes
app.use(function(request, response) {
  console.log('Responded with 404');
  response.status(404).end();
});

// Handle other errors
app.use(function(error, request, response) {
  console.error(error.stack);
  response.status(500).send(error.message);
});

// Start the server
app.listen(3000);
console.log('Server is ready.');
