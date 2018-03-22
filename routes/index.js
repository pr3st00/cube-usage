var express = require('express');
var router = express.Router();

const TITLE = "Cube Usage"

router.get('/', function(req, res, next) {
  res.render('index', { title: TITLE });
});

module.exports = router;
