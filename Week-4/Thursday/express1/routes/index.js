const {Router} = require('express');
const router = Router ();
const ProductRouter = require('./products');

router.get('/', (req, res) => {
    res.send("Home Page");
})

router.use('/products', ProductRouter);

module.exports = router;