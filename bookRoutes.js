const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

router.get('/getbook', bookController.getAllBooks);
router.get('/:id', bookController.getBook);
router.post('/postbook', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
