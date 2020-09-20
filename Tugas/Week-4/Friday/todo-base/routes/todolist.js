const {Router} = require('express');
const router = Router ();
const TodoRouter = require('../controllers/index')

router.get('/', TodoRouter.getTodo)
router.get('/add', TodoRouter.addFormTodo)
router.post('/add', TodoRouter.addTodo)
router.get('/delete/:id', TodoRouter.deleteTodo)
router.get('/update/:id', TodoRouter.updateTodo)


module.exports = router;
