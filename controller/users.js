
// get all of the users
module.exports.index = function(request, response, next) {
  User.distinct('id')
    .then(userIDS => response.redirect(`/users$`))
};

// get a single user
module.exports.retrieve = function(request, response) {
  response.send(`GET /users/${request.params.user_id}`);
};
