const { Router } = require('express');
const router = Router ();
const MoviesRoutes = require('./movies')

router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.use('/movies', MoviesRoutes);

module.exports = router;


