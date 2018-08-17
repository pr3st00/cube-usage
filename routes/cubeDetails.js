'use strict'

const express = require('express');
const cloudant = require('../db/cloudantdb');
const router = express.Router();

const config = require('../config/config.json')

router.get('/', function (req, res, next) {
  let cubeId = req.query.cube;

  cloudant.findById(cubeId, function (callback) {

    console.log('Parameter: ' + cubeId);
    res.render('cubeDetails', { title: "Cube Details", dbData: callback.data });
    for (var i = 0; i < callback.data.length; i++) {
      console.log('  Doc id: %s', callback.data[i].payload.cube);
    }
  });


});

module.exports = router;
