const {Router} = require('express');
const router = Router ();
// const TodoRouter = require('./products');

router.get('/', (req, res) => {
    res.render('index.ejs');
})

router.get('/todolist', (req, res) => {
    res.send("This is a TODOLIST home PAGE");
})

router.use('/todolist', TodoRouter)

// router.use('/products', ProductRouter);

module.exports = router;