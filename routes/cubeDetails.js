var express = require('express');
var cloudant = require('../db/cloudantdb');
var router = express.Router();

var config = require('../config')

router.get('/', function(req, res, next) {
  var cubeId = req.query.cube;

  cloudant.findById(cubeId, function(callback){

    console.log('Parameter: ' + cubeId);
    res.render('cubeDetails', { title: "Cube Details" , dbData:callback.data});
    for (var i = 0; i < callback.data.length; i++) {
      console.log('  Doc id: %s', callback.data[i].payload.cube);
    }
  });


});

module.exports = router;
