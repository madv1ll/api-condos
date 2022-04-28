const { Router } = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.json([ {
                "condo name":"South Condo"},
                {
                    "condo name":"West Condo"
                }]);
});
module.exports = router;