// INDEX //

var express = require('express');
var path = require('path');
var router = express.Router();

// routes
// ...

// wildcard
router.get('/*', function(req, res, next) {
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public', file));
});


module.exports = router;
