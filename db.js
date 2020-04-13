const mongoose = require('mongoose');

module.exports = function() {

  // Avoid warnings
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  // Start connecting
  mongoose.connect('mongodb://localhost/project-finalproject-tim-jonas');

  // Log errors
  mongoose.connection.on('error', function(error) {
    console.error(error.stack);
  });
};