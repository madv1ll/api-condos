const { Router } = require('express');
const router = Router();
const Ownercontroller = require('../controllers/owner');

router.get('/', Ownercontroller.listOwner);
router.post('/newOwner', Ownercontroller.createOwner);
// //Transferencias
// router.get('/historial', Ownercontroller.getTransferencia)

router.get('/:rut/', Ownercontroller.getOwner);

router.get('/:id/debt', (req, res) => {
    res.json({
                "Fecha Deuda": "30-03-2022",
                "Monto Deuda":"$ 45000"
    });
});

router.get('/rut/bill', (req, res) => {
    res.json([ {
                "Periodo cobro": "01-01-2022 - 30-01-2022",
                "Fecha Vencimiento":"05-02-2022",
                "Fecha Pago": "02-02-2022",
                "Monto":"$ 44500"},
                {
                    "Periodo cobro": "01-12-2021 - 30-12-2021",
                    "Fecha Vencimiento":"05-01-2022",
                    "Fecha Pago": "01-01-2022",
                    "Monto":"$ 44500"
                }]);
});

router.get('/rut/house', (req, res) => {
    res.json([ {
                "houseId":"0",
                "nombre":"Casa condo 1",
                "condominio":"Condo 1"
            },
            {
                "houseId":"1",
                "nombre":"Casa condo 2",
                "condominio":"Condo 2"
            }]);
});

router.get('/rut/houseId', (req, res) => {
    res.json([ {
                    "id":"0",
                    "area": "60 m2",
                    "habitants": 4
                },
                {
                    "id":"1",
                    "area": "50 m2",
                    "habitants": 3
                }]);
});

module.exports = router;