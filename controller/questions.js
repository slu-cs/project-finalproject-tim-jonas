
// get all of the questions
module.exports.index = function(request, response) {
  response.send('GET /questions');
};

// get all of the questions for a single user
module.exports.retrieve = function(request, response) {
  response.send(`GET /questions/${request.params.user_id}`);
};