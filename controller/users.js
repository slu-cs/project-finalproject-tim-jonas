
const User = require('../model/users');

// get all of the users
module.exports.index = function(request, response, next) {
  User.find().sort()
    .then(users => response.render('users/index', {users: users}))
    .catch(error => next(error));
};

// create user
module.exports.create_user = function(request, response) {
  request.session.name = 'DOES_NOT_EXIST';
  response.render('login/index');
};

//create user
module.exports.create = function(request, response){
  User.create(request.body)
  .then(user => response.status(201).send(user))
  .catch(error => next(error));
};
