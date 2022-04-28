const { Router } = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.send("Rutas: /api/owner");
});

module.exports = router;