const { Router } = require('express')
const router = Router();
const Condocontroller = require('../controllers/condo');

router.get('/list', Condocontroller.listCondo);
router.post('/newCondo', Condocontroller.createCondo);
router.get('/list/listCondo', Condocontroller.listCondo);
router.put("/modify/:id", Condocontroller.updateCondo);
router.delete("/delete/:id", Condocontroller.deleteCondo);

router.get('/condominio', (req, res) => {
    res.json([ {
                "condo name":"South Condo"},
                {
                    "condo name":"West Condo"
                }]);
});
router.get('/condoId', (req, res) => {
    res.json([ {
                "condosId"    :"0",
                 "name"       :"South Condo",
                 "cantCasas"  :"40",
                 "houseTypeId":"0",
                },
                {
                "condosId"    :"1",
                 "nombre"       :"West Condo",
                 "cantidad de casas"  :"45",
                 "Tipo de casas":"1",
                }]);
});
router.get('/condoId/houseTypeId', (req, res) => {
    res.json([ {
                "id":"0",
                "nombre":"Casas adosado.",
                "area":"50 m2",
                },
                {
                    "id":"1",
                    "nombre":"Casas pareado",
                    "area":"35 m2",
                }]);
});
router.get('/condoId/service', (req, res) => {
    res.json([ {
                "serviceid":"0",
                "nombre":"mantenimiento jardin",
                },
                {
                    "serviceid":"1",
                    "nombre":"mantenimiento instalaciones funcionales",
                }]);
});

module.exports = router;