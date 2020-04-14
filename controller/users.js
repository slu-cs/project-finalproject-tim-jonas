
const User = require('../model/users');

// get all of the users
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'last_name'; // Default to sort by course

  User.find().sort(order)
    .then(users => response.render('users/index', {users: users}))
    .catch(error => next(error));
};