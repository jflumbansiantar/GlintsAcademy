const {Book} = require("../models")

class BookController {
    static getBook (req,res) {
        Book.findAll({
            order : [
            ['id', 'ASC']
        ]})
            .then (result => {
                res.json(result);
            })
            .catch(error => {
                console.log(error)
            })
    }
    static addBook (req,res) {
        const {title, author, year, pages, genre, quantity} = req.body;
        Book.findOne({
            where : {name}
        })
            .then (found => {
                if(found) {
                    res.send(`${name} already exist! Please input another name!`)
                } else {
                    return Book.create({
                        title, 
                        author, 
                        year, 
                        pages, 
                        genre, 
                        quantity
                    })
                }
            })
            .then (result => {
                res.send(result);
            })
            .catch(error => {
                res.send(error);
            })

    }
    static deleteBook (req,res) {
        const id = req.params.id;
        Book.destroy({
            where: {id}
        })
            .then (result => {
                res.redirect('/books');
            })
            .catch(error => {
                res.send(error);
            })
    }
    static updateBook (req,res) {
        const id = req.params.id;
        const {title, author, year, pages, genre, quantity} = req.body;
        Book.update({
            title, 
            author, 
            year, 
            pages, 
            genre, 
            quantity
        }, {
            where: {id}
        })
            .then(result => {
                if(result[0] === 1) {
                    res.redirect('/books')
                } else {
                    res.send('Do you need to update something or not?')
                }
            })
            .catch(error=> {
                res.send(error);
            })
    }
    static addFormBook (req,res) {
        res.render('addBooks.ejs')
    }
    static updateFormBook (req,res) {
        const id = req.params.id;
        Book.findOne ({
            where: {id}
        })
            .then (result => {
                console.log(result);
                res.render('editBook.ejs', {books:result})
            })
            .catch(error => {
                res.send(error);
            })
    }
    static findByBookId (req,res) {
        const id = req.params.id;
        Book.findOne({
            where: {id}
        })
            .then(result => {
                res.send(result)
            })
            .catch(error => {
                res.send(error);
            })
    }
    static findByBookName (req,res) {
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