// routes/api/books.js

const express = require('express');
const router = express.Router();

// load book model
const Book = require('../../models/Book');

// @route GET api/books/test
// @description tests books route
// @access public

router.get('/test', (req, res) => res.send('book route testing;'));

// @route get api/books
// @description get all books
// @access Public

router.get('/', (req, res) => {
  book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'no books founds'}));
});

// @route get api/books/:id
// @description fet single book by id
// @access public

router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No book found' }));
});
// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;
