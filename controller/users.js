
const User = require('../model/users');

// get all of the users
module.exports.index = function(request, response, next) {
  User.find().sort()
    .then(users => response.render('users/index', {users: users}))
    .catch(error => next(error));
};