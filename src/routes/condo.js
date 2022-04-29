const { Router } = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.json([ {
                "condo name":"South Condo"},
                {
                    "condo name":"West Condo"
                }]);
});
router.get('/api/condo/condoId', (req, res) => {
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
router.get('/api/condo/condoId/houseTypeId', (req, res) => {
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
router.get('/api/condo/condoId/service ', (req, res) => {
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