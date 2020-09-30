const { Router } = require('express');
const router = Router();
const MoviesController = require('../controllers/movies')

router.get('/', MoviesController.getMovies)                //succeeded
router.get('/add', MoviesController.addFormMovie)          //succeeded
router.post('/add', MoviesController.addMovie)             //succeeded
router.get('/edit/:id', MoviesController.editFormMovie)    //succeeded
router.post('/edit/:id', MoviesController.editMovie)       //succeeded
router.get('/delete/:id', MoviesController.deleteMovie)    //succeeded
router.get('/:id', MoviesController.findByMovieId)
// get info

module.exports = router;
