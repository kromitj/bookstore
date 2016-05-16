var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Genre = require('./models/genre');

mongoose.connect('mongodb://localhost/bookstore');
app.set('port', process.env.PORT || 3000);
var db = mongoose.connection;

app.get('/', function(req, res) {
  res.send("Yo at homepage yo");
});

app.get('/api/genres', function(req, res) {
  Genre.getGenres(function(err, genres) {
    if (err) {
      throw err;
    };
    res.json(genres);
  });
});


app.listen(app.get('port'), function() {
  console.log("server startes on PORT 3000");
}); 