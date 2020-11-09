const {Pirates} = require ('../models')

class PiratesControllers {
    static getPirates(req,res) {
        Pirates.findAll()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                res.send(error);
            })
    }
    static addFormPirates(req,res) {
        res.render('addPirates.ejs');
    }
    static addPirates(req,res) {
        const {name, status, haki} = data;
        Pirates.create({
            name,
            status,
            haki,
            createdAt : new Date(),
            updatedAt : new Date()
        })
            .then(result => {
                res.redirect('/pirates')
            })
            .catch(error => {
                res.send(error);
            })
    }
    static deletePirates(req,res) {
        const id = req.params.id;
        Pirates.destroy({
            where: {id}
        })
            .then(() => {
                res.redirect('/pirates')
            })
            .catch(error => {
                res.send(error);
            })
    }
}

module.exports = PiratesControllers;