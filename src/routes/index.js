const { Router } = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.send(`Rutas: <br>
             /api/owner <br>
            /api/condo `);
});

module.exports = router;