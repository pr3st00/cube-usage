'use strict'

const Cloudant = require('@cloudant/cloudant');
const config = require('../config/config.json');

// Initialize the library with my account.
const urlDb = "https://" + config.db.username + ":" + config.db.password + "@" + config.db.host + ":" + config.db.port;
const cloudant = new Cloudant({ url: urlDb, plugins: 'cookieauth' });
const db = cloudant.db.use(config.db.dbname);

function findById(cid, callback) {

  db.find({ selector: { payload: { cube: cid } } }, function (er, result) {
    if (er) {
      throw er;
    }

    console.log('Found %d documents with id: ' + cid, result.docs.length);
    /*  for (var i = 0; i < result.docs.length; i++) {
        console.log('  Doc id: %s', result.docs[i].payload.cube);
      }*/

    callback({ data: result.docs });
  });
}

module.exports = { findById };

