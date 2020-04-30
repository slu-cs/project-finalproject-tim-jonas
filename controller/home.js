// get all of the questions for a single user
module.exports.retrieve = function(request, response) {
  if (request.session.name){
    response.redirect(`/questions/user/${request.session.name}`);
  } else {
    response.render('login/index', {question: null});
  }
};