
const Question = require('../model/questions');

// get all of the questions
module.exports.index = function(request, response) {
  Question.distinct('user_id')
    .then(userIDs => {
      if (userIDs[0] !== request.session.name) {
        response.redirect(`/questions/${userIDs[0]}`);
      } else {
        response.redirect(`/questions/${userIDs[1]}`);
      }
    })
    .catch(error => next(error));
};

// get all of the questions for a single user
module.exports.retrieve = function(request, response, next) {
  const queries = [
    Question.find().where('user_id').equals(request.params.user_id),
    Question.distinct('user_id')
  ];

  Promise.all(queries).then(function([question, userIDs]) {
    if (question) {
      response.render('questions/index', {question: question, userIDs: userIDs});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};

// get the questions for the current user
module.exports.retrieve_user = function(request, response, next) {
  const queries = [
    Question.find().where('user_id').equals(request.params.user_id),
    Question.distinct('user_id')
  ];

  Promise.all(queries).then(function([question, userIDs]) {
    if (question) {
      response.render('login/index', {question: question, userIDs: userIDs});
    } else {
      next();
    }
  }).catch(error => next(error));
};

// create a question
module.exports.create = function(request, response){
  Question.create(request.body)
  .then(question => response.status(201).send(question))
  .catch(error => next(error));
};

// delete a question
module.exports.delete = function(request, response, next) {
  Question.findByIdAndDelete(request.params.user_id)
    .then(question => question ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT /questions/:id (with the changes in the request body)
module.exports.update = function(request, response, next) {
  Question.findByIdAndUpdate(request.params.user_id, request.body)
    .then(question => question ? response.status(200).end() : next())
    .catch(error => next(error));
};
