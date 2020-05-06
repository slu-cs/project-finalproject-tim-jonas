
// render no user
module.exports.no_user = function(request, response) {
  response.render('no_permissions/no_user');
};

// render wrong user
module.exports.wrong_user = function(request, response) {
  response.render('no_permissions/wrong_user');
};

// render user already exists
module.exports.user_already_exists = function(request, response) {
  response.render('no_permissions/user_already_exists', {user_id: request.params.user_id});
};
