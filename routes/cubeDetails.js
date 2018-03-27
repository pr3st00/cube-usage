var express = require('express');
var router = express.Router();

var config = require('../config')

router.get('/', function(req, res, next) {
  res.render('cubeDetails', { title: "Cube Details" });
});

module.exports = router;
