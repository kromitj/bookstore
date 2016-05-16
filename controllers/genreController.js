Genre = require('../models/genre');
// var config     = require('../config/config');         // Get configuration file

module.exports.controller = function(app) {
  
  app.get('/api/genres', function(req, res) {
    Genre.getGenres(function(err, genres) {
      if(err) { throw err };

      res.json(genres);
    });
  });

  app.get('/api/genres/:_id', function(req, res) {
    var genreId = req.params._id
    Genre.getGenreById(genreId, function(err, genre) {
      if(err) { throw err };

      res.json(genre);
    });
  });

  app.post('/api/genres', function(req, res) {
    console.log("inside genres post route");
    var genre = req.body;
    Genre.addGenre(genre, function(err, genre) {
      if(err) { throw err };

      res.json(genre);
    });
  });

  app.put('/api/genres/:_id', function(req, res) {
    var genreId = req.params._id;
    var updatedGenre = req.body;
    Genre.updateGenre(genreId, updatedGenre, {}, function(err, updatedGenre) {
      if(err) { throw err };

      res.json(updatedGenre);
    });
  });

  app.delete('/api/genres/:_id', function(req, res) {
  var genreId = req.params._id;
    Genre.removeGenre(genreId, function(err, genre) {
      if(err) { throw err };
      
      res.json(genre);
    });
  });
};