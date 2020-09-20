const {ToDoList} = require('../models'),

class TodoController {
    static getTodo (req, res) {
        ToDoList.findAll()
            .then(result => {
                res.render('todolist.ejs', {todolist: result})
            })
            .catch(error => {
                console.log(error);
            })
        
    }
    static addFormTodo (req, res) {
        res.render('addTodo.ejs');
    }
    static addTodo (req, res) {
        const {task, status} = req.body;
        ToDoList.create({
            task, 
            status
        })
            .then(result => {
                res.redirect('/todolist')
            })
            .catch(error => {
                res.send(error);
            })
        
    }
    static deleteTodo (req, res) {
        const id = req.params.id;
        ToDoList.destroy({
            where: {id}
        })
            .then(() => {
                res.redirect('/todolist')
            })
            .catch(error => {
                res.send(error)
            })
    }
    static updateTodo (req, res) {
        const id = req.params.id;
        ToDoList.update({
            status
        },
            {
            where: {id}
        })
            .then(() => {
                res.send(result)
            })
            .catch(error => {
                res.send(error)
            })
    }
}


module.exports = TodoController;