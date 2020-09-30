const {Book} = require("../models")

class BookController {
    static async getBook (req,res) {
        try {
            const result = await Book.findAll ({
                order : [['id', 'ASC']]
            })
            res.render ('books.ejs', {books : result})
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    static async addFormBook (req,res) {
        res.render('addBooks.ejs')
    }
    static async addBook (req,res) {
        const {title, author, year, pages, genre, quantity} = req.body;
        try {
            const found = await Book.findOne ({
                where: {title}
            })
            if (found) {
                res.status(409).json(`${title} already exist!`)
            } else {
                const book = await Book.create ({
                    title, 
                    author, 
                    year, 
                    pages, 
                    genre, 
                    quantity
                })
                res.redirect('/books')
            }
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
    static async deleteBook (req,res) {
        const id = req.params.id;
        try {
            const found = await Book.findOne ({
                where: {id}
            })
            if (found) {
                Book.destroy({
                    where: {id}
                })
                res.redirect('/books')
            } else {
                res.status(404).json(`Book is not found.`)
            }
        }
        catch (error) {
            res.status(500).json(error)
        }
    }
    static async updateFormBook (req,res) {
        const id = req.params.id;
        try {
            const found = await Book.findOne ({
                where: {id}
            })
            if (found) {
                res.render('editBook.ejs', {book :result})
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
    static async updateBook (req,res) {
        const id = req.params.id;
        const {title, author, year, pages, quantity} = req.body;
        try {
            const found = await Book.findOne ({
                where: {id}
            })
            if (found) {
                const book = await Book.update({
                    title, 
                    author, 
                    year, 
                    pages, 
                    quantity
                }, 
                {where: {id}}
                )
                res.status(201).json(book).redirect('/books')
            } else {
                res.status (404).json(`Book is not found.`)
            }
        }
        catch (error) {
            res.status(500).json(error)
        }
    }
    
   
    static async findByBookId (req,res) {
        const id = req.params.id;
        try {
            const found = await Book.findOne ({
                where: {id}
            })
            if (found) {
                res.send(found)
            } else {
                res.status(404).json(`Book is not found.`)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async findByBookName (req,res) {
        const name = req.params.name;
        Book.findOne({
            where: {name}
        })
            .then(result => {
                res.send(result)
            })
            .catch(error => {
                res.send(error);
            })
    }
}

module.exports = BookController;