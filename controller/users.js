
// get all of the users
module.exports.index = function(request, response) {
  response.send('GET /users');
};

// get a single user
module.exports.retrieve = function(request, response) {
  response.send(`GET /users/${request.params.user_id}`);
};