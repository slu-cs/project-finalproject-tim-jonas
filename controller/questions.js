
const Question = require('../model/questions');

// get all of the questions
module.exports.index = function(request, response) {
  Question.distinct('user_id')
    .then(userIDs => response.redirect(`/questions/${userIDs[0]}`))
    .catch(error => next(error));
};

// get all of the questions for a single user
module.exports.retrieve = function(request, response) {
  const queries = [
    Question.find().where('user_id').equals(request.params.user_id),
    Question.distinct('user_id')
  ];

  Promise.all(queries).then(function([question, userIDs]) {
    if (question) {
      console.log(question)

      response.render('questions/index', {question: question, userIDs: userIDs});
    } else {
      next(); // No such course
    }
  }).catch(error => next(error));
};

module.exports.create = function(request, response){
  Question.create(request.body)
  .then(question => response.status(201).send(question))
  .catch(error => next(error));
};

module.exports.delete = function(request, response) {
  Question.findByIdAndDelete(request.params.user_id)
    .then(question => question ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT /questions/:id (with the changes in the request body)
module.exports.update = function(request, response) {
  Question.findByIdAndUpdate(request.params.user_id, request.body)
    .then(question => question ? response.status(200).end() : next())
    .catch(error => next(error));
};
