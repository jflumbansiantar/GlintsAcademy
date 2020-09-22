const {Ships} = require ('../models')

class ShipsControllers {
    static getShips(req,res) {
        Ships.findAll()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                res.send(error);
            })
    }
    static addFormShips(req,res) {
        res.render('addShips.ejs');
    }
    static addShips(req,res) {
        const {name, type, power} =data;
        Ships.create({
            name,
            type,
            power,
            createdAt : new Date(),
            updatedAt : new Date()
        })
            .then(result => {
                res.redirect('/ships')
            })
            .catch(error => {
                res.send(error);
            })
    }
    static deleteShips(req,res) {
        const id = req.params.id;
        Ships.destroy({
            where: {id}
        })
            .then(() => {
                res.redirect('/ships')
            })
            .catch(error => {
                res.send(error);
            })
    }
}

module.exports = ShipsControllers;