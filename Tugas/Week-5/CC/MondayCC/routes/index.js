const {Router} = require('express');
const router = Router ();

router.get('/', (req, res) => {
    res.render('index.ejs');
})

router.get('/ships', (req, res) => {
    res.send("Ships PAGE");
})
router.get('/pirates', (req, res) => {
    res.send("Pirates PAGE");
})


module.exports = router;