var express = require('express');
var router = express.Router();

var config = require('../config')

router.get('/', function(req, res, next) {
  res.send(config.app);
});

module.exports = router;
