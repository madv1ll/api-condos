const { Router } = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.json({"titulo":"hola mundito lindo"});
});

module.exports = router;