const {Movies, Genres} = require('../models')

class MovieControllers {
    static async getMovies (req,res) {
        Movies.findAll ({
            order : ['id'],
            include : [Genre]
        })
            .then (result => {
                res.json (result);
            })
            .catch(err => {
                res.status(500).json(err);            
            })
    }

    static async addFormMovie (req,res) {
        res.render('addMovies.ejs');
    }

    static async addMovies (req,res) {
        const {title, year, rating} = req.body;
        try {
            const found = await Movies.findOne ({
                where: { title }
            })
            if (found) {
                res.status(409).json (`${title} already exist!`)
            } else {
                const movie = await Movies.create ({
                    title, 
                    year, 
                    rating
                })
                res.status(201).json(movie)
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    
    static async editFormMovies (req,res) {
        res.render('editMovies.ejs');
    }

    static async editMovies (req,res) {
        const {title, year, rating} = req.body;
        try {
            const found = await Movies.findOne ({
                where: { id }
            })
            if (found) {
                const movie = await Movies.create ({
                    title, 
                    year, 
                    rating
                })
                res.status(201).json(movie)
            } else {
                res.status(409).json (`${title} is not found.`)
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async deleteMovies (req,res) {
        const id = req.params.id;
        try {
            const found = await Movies.findOne ({
                where: {id}
            })
            if (found){
                Movies.destroy({
                    where:{id}
                })
                res.status(201).json(movies)
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
            const found = await Movies.findOne ({
                where: { id }
            })
            if (found) {
                res.status(201).json(movie)
            } else {
                res.status(404).json(`Movie is not found.`)
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

}

module.exports = MovieControllers;