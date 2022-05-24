const { Router } = require('express');
const router = Router();
const Ownercontroller = require('../controllers/owner');

router.get('/list', Ownercontroller.listOwner);
router.post('/newOwner', Ownercontroller.createOwner);
router.get('/list/:rut', Ownercontroller.getOwner);
router.put('/modify/:rut', Ownercontroller.updateOwner)
router.delete('/delete/:rut/:pass', Ownercontroller.deleteOwner)
//Deuda
router.get('/deuda/:rut', Ownercontroller.getDeuda);
router.get('/deuda/:rut/historial', Ownercontroller.getDeudaHist);
router.post('/newDeuda', Ownercontroller.createDeuda);
router.put('/deuda/modify/:id', Ownercontroller.updateDeuda);
router.delete('/deuda/delete/:id/:pass', Ownercontroller.deleteDeuda);

module.exports = router;