const { Router } = require('express');
const router = Router();
const PiratesController = require('../controllers/Ships')

router.get('/pirates', PiratesController.getPirates)
router.get('/pirates/add', PiratesController.addFormPirates)
router.post('/pirates/add', PiratesController.addPirates)
router.get('/pirates/delete/:id', PiratesController.deletePirates)

module.exports = router;
