const { Router } = require('express');
const router = Router();
const ShipsController = require('../controllers/Ships')

router.get('/ships', ShipsController.getShips)
router.get('/ships/add', ShipsController.addFormShips)
router.post('/ships/add', ShipsController.addShips)
router.get('/ships/delete/:id', ShipsController.deleteShips)

module.exports = router;
