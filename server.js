var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var bookController = require('./app/controllers/book.js')
var mongoose   = require('mongoose');
mongoose.connect('mongodb://book:book@ds131492.mlab.com:31492/book')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.port || 8080;  

var router = express.Router();             

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to Library!' });   
});

router.route('/book')
.post(bookController.postBook)
.get(bookController.getBook)

router.route('/book/:book_id')
.delete(bookController.deleteBook)
.post(bookController.updateBook)
.get(bookController.findBook)

app.use('/', router);

app.listen(port);

console.log('Magic happens on port ' + port);