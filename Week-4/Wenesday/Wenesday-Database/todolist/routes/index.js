const {Router} = require('express');
const router = Router ();

router.get('/', (req, res) => {
    res.send("Ini TO_DO_LIST")
})

module.exports = router;