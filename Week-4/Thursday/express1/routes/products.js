const {Router} = require('express');
const ProductRouter = require('./products');

ProductRouter.get('/', (req, res) => {
    res.send("Ini halaman produk");
})

ProductRouter.get('/tambah', (req, res) => {
    res.send("Ini halaman produk tambahan");
})

module.exports = ProductRouter;