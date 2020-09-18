const {Router} = require('express');
const router = Router ();
// const ProductRouter = require('./products');

router.get('/', (req, res) => {
    res.render('index.ejs', {students});
})

router.get('/students', (req, res) => {
    res.send("This is a student home PAGE");
})

router.get('/lectures', (req, res) => {
    res.send("This is a lecture home PAGE");
})

// router.use('/products', ProductRouter);

module.exports = router;