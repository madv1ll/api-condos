const { Router } = require('express');
const router = Router();
const HouseController = require('../controllers/house');

router.get('/list', HouseController.listHouse);
router.post('/newHouse', HouseController.createHouse);
router.get('/list/:id', HouseController.getHouse);
router.put('/modify/:id', HouseController.updateHouse);
router.delete('/delete/:id/:pass', HouseController.deleteHouse);

module.exports = router;