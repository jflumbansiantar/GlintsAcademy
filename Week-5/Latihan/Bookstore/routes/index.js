const {Router} = require('express');
const router = Router ();
const BooksRoutes = require('./book')

router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.use('/books', BooksRoutes);

module.exports = router;
