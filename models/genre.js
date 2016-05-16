var mongoose = require('mongoose');

// create the schema

var genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

module.exports.getGenres = function(callback, limit) {
  Genre.find(callback).limit(limit);
};

module.exports.getGenreById = function(genreId, callback) {
  Genre.findById(genreId, callback);
};

module.exports.addGenre = function(genre, callback) {
  Genre.create(genre, callback);
};

module.exports.updateGenre = function(genreId, updatedGenre, options, callback) {
  var query = { _id: genreId};
  var update = {
    name: updatedGenre.name
  };
  Genre.findOneAndUpdate(query, update, options, function(err, updatedGenre) {
    if(err) {
      throw err;
    };
    res.json(updatedGenre);
  });
};

module.exports.removeGenre = function(genreId, callback) {
  var query = { _id: genreId};
  Genre.remove(query, callback);
};