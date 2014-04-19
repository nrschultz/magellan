var express = require('express');
var router = express.Router();

/* GET api page. */
router.get('/', function(req, res) {
    res.send('hey');
});

router.post('/toggle-state', function(req, res) {
    res.send('Success', 200);
});

module.exports = router;
