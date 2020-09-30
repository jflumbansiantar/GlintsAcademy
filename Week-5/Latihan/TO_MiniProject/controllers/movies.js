const { where } = require('sequelize');
const {Movie} = require('../models')

class MoviesController {
    static async getMovies (req,res) {
        try {
            const result = await Movie.findAll ({
                order : [
                    ['id', 'ASC']
                ],

            })
            res.render('movie.ejs', {movie : result})
            // res.status(201).json('movie.ejs', {movie: result})
        }
        catch(err) {
                res.status(500).json(err);
        }
    }

    static async addFormMovie (req,res) {
        res.render('addMovies.ejs');
    }

    static async addMovie (req,res) {
        const {title, year, rating} = req.body;
        try {
            const found = await Movie.findOne ({
                where: { title }
            })
            if (found) {
                res.status(409).json (`${title} already exist!`)
            } else {
                const movie = await Movie.create ({
                    title, 
                    year, 
                    rating
                })
                res.redirect ('/movies')
                // res.status(201).json(movie)
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    
    static async editFormMovie (req,res) {
        const id = req.params.id;
        Movie.findOne ({
            where: {id}
        })
        .then (result => {
            res.render('editMovies.ejs', {movie:result});
        })
        .catch(error => {
            res.send (error);
        })
        
    }

    static async editMovie (req,res) {
        const id = req.params.id;
        const {title, year, rating} = req.body;
        Movie.update ({
            title, 
            year, 
            rating
        }, {where : {id}
        })
            .then(result => {
                if(result[0] === 1) {
                    res.redirect('/movies')
                } else {
                    res.status(409).json (`Movie with title ${id} is not found.`)
                }
            })
            .catch (error => {
                res.status(500).json(err);
            })
    }

    static async deleteMovie (req,res) {
        const id = req.params.id;
        try {
            const found = await Movie.findOne ({
                where: {id}
            })
            if (found){
                Movie.destroy({
                    where:{id}
                })
                res.redirect('/movies')
            } else {
                res.status(404).json(`Movie with ${id} is not found.`)
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    
    static async findByMovieId (req,res) {
        const id = req.params.id;
        try {
            const found = await Movie.findOne ({
                where: { id }
            })
            if (found) {
                res.send(found)
                // res.status(201).json(movie).send(movie)
            } else {
                res.status(404).json(`Movie is not found.`)
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    // static async findByMovieTitle (req,res) {
    //     const title = req.params.title;
    //     try {
    //         const found = await Movie.findOne ({
    //             where: { title }
    //         })
    //         if (found) {
    //             res.status(201).json(movie)
    //         } else {
    //             res.status(404).json(`Movie is not found.`)
    //         }
    //     }
    //     catch (err) {
    //         res.status(500).json(err);
    //     }
    // }

}

module.exports = MoviesController;