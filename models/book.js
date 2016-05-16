var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({ 
  title: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    image_url: {
      type: String,
    },
    create_date: {
      type: Date,
      default: Date.now
    }
});
  


module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = function(callback, limit) {
  Book.find(callback).limit(limit);
};
module.exports.getBookById = function(bookId, callback) {
  Book.findById(bookId,  callback);
};
module.exports.addBook  = function(book, callback) {
  Book.create(book, callback);
};
module.exports.updateBook = function(bookId, book, options, callback) {
  var query = {_id: bookId};
  var update = {
    title: book.title,
    genre: book.genre,
    author: book.author,
    description: book.author,
    image_url: book.image_url
  };  
  Book.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteBook = function(bookId, callback) {
  var query = {_id: id};
  Book.remove(query, callback);
}