const {Router} = require('express');
const router = Router ();
const BookController = require('../controllers/books')

router.get('/', BookController.getBook)
router.get('/add', BookController.addFormBook)
router.post('/add',BookController.addBook)
router.get('/delete/:id', BookController.deleteBook)
router.get('/edit/:id', BookController.updateFormBook)
router.post('/edit/:id', BookController.updateBook)
router.get('/:id', BookController.findByBookId)
router.get('/:name', BookController.findByBookName)

module.exports = router;