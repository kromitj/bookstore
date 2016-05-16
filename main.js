var express    = require("express");
var app        = module.exports = express(); // for testing apparently...

var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var path       = require('path');
var fs         = require('fs'); 

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// set link to controllers dir
fs.readdirSync('./controllers').forEach(function (file) {
  if (file.substr(-3) === '.js') {
    var route = require('./controllers/' + file);
    route.controller(app);
  }
});

app.listen(app.get('port'), function() {
  console.log("server startes on PORT 3000");
}); 