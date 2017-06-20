var Book = require('../models/book.js')

exports.postBook = function(req, res){
var book = new Book();      
        book.title = req.body.title;  
        book.author = req.body.author;
        book.year = req.body.year;
        book.pages = req.body.pages

        book.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Book created!' });
        });
}
	exports.getBook = function(req,res){
        Book.find(function(err, book) {
            if (err)
                res.send(err);

            res.json(book);
        });
    }

    exports.updateBook = function(req,res){
    Book.findById(req.params.book_id, function(err, book) {
        if (err)
            res.send(err);

        book.title = req.body.title;  
        book.author = req.body.author;
        book.year = req.body.year;
        book.pages = req.body.pages


           
            book.save(function(err) {
                if (err)
                    res.send(err);

               res.json({ message: 'Book updated!' });
            });

       });
}


exports.findBook = function(req,res){
        Book.findById(req.params.book_id, function(err, book) {
            if (err)
                res.send(err);
            res.json(book);
        });
    }


exports.deleteBook = function(req,res){
	Book.findById(req.params.book_id, function(err,book){
    book.remove({
            _id: req.params.book_id
        }, function(err, book) {
            if (err)
                res.send(err);

           res.json({ message: 'Successfully deleted' });
        });

    })
}