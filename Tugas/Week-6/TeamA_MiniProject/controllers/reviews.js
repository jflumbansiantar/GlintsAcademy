const { movies, users, reviews } = require('../models')
const sequelize = require('sequelize')

class ReviewController {
    static async getReview(req, res, next) {
        try {
            const result = await reviews.findAll({
                order: [['id', 'ASC']],
                include: [
                    users,
                    movies
                ]
            })
            res.status(200).json({
                status: true,
                msg: 'Here are all the reviews.',
                data: result
            })
        } catch (error) {
            next(error)
        }
    }
    static async addReview(req, res, next) {
        const { comment, rating } = req.body;
        const movieId = req.params.id
        const userId = req.usersData.id

        try {
            const found = await reviews.findOne({
                where: {
                    userId: userId
                }
            })
            if (found) {
                res.status(409).json({
                    status: false,
                    msg: "You already add review for this movie, thanks!"
                })
            } else {
                const newReview = await reviews.create({
                    comment,
                    rating,
                    userId,
                    movieId
                });
                res.status(201).json({
                    status: true,
                    msg: "Thank you for your review!",
                    data: newReview
                })
            }
        } catch (error) {
            next(error)
        }
    }
    static async deleteReview(req, res, next) {
        const id = req.params.id;
        try {
            const result = await reviews.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({
                status: true,
                msg: 'Review has been deleted',
                data: result
            });
        } catch (error) {
            next(error)
        }
    }
    static async updateReview(req, res, next) {
        const id = req.params.id;
        const { comment, rating, userId, movieId } = req.body;
        try {
            const result = await reviews.findOne({
                where: {
                    id,
                }
            })
            if (result) {
                const editReview = await reviews.update({
                    comment,
                    rating,
                    userId,
                    movieId
                }, {
                    where: {
                        id
                    }
                });
                res.status(200).json({
                    status: true,
                    msg: 'Review updated',
                    data: editReview
                })
            } else {
                res.status(404).json({
                    status: false,
                    msg: 'Review is not found.'
                })
            }

        } catch (error) {
            next(error)
        }
    }
    static async getReviewbyMovie(req, res, next) {
        const movieId = req.params.movieId
        try {
            const findMovie = await movies.findOne({
                where: {
                    id: movieId
                }
            })
            if (findMovie) {
                const result = await reviews.findAll({
                    where: { movieId: movieId },
                    order: [['id', 'ASC']],
                    include: [
                        users, movies
                    ]
                });
                const totalrating = await reviews.findAll({
                    where: { movieId },
                    attributes: [
                        [sequelize.fn('AVG', sequelize.col('rating')), 'avgrating']
                    ],
                })
                res.status(200).json({
                    status: true,
                    msg: 'Here are all the reviews for this movie.',
                    data: result,
                    rating: totalrating
                })
            } else {
                res.status(404).json({
                    status: false,
                    msg: "Movie cannot be found."
                })
            }
        } catch (error) {
            next(error)
        }
    }

}

module.exports = {
    ReviewController
};
