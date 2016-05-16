Book = require('../models/book');

module.exports.controller = function(app) {
  
  app.get('/api/books', function(req, res) {
    Book.getBooks(function(err, books) {
      if (err) {
        throw err;
      };
      res.json(books);
    });
  });

  app.get('/api/books/:_id', function(req, res) {
    Book.getBookById(req.params._id, function(err,book ) {
      if (err) {
        throw err;
      };
      res.json(book);
    });
  });

  app.post('/api/books', function(req, res) {
    var book = req.body;
    Book.addBook(book, function(err, book) {
      if (err) { 
        throw err; 
      };
      res.json(book);
    });
  });

  app.put('/api/books/:_id', function(req, res) {
    var bookId = req.params._id;
    var book = req.body;
    Book.updateBook(bookId, book, {}, function(err, updatedBook) {
      if(err) { 
        throw err;
      };
      res.json(updatedBook);
    });
  });

  app.delete('/api/books/:_id', function(req, res) {
    var bookId = req.params._id;
    Book.removeBook(bookId, function(err, book) {
      if(err) {
        throw err;
      };
      res.json(book);
    });
  });
};