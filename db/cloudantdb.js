var Cloudant = require('@cloudant/cloudant');
var config = require('../config');

// Initialize the library with my account.
var urlDb = "https://"+ config.db.username + ":" + config.db.password +"@" + config.db.host + ":" + config.db.port;
var cloudant = new Cloudant({ url: urlDb, plugins: 'cookieauth' });
var db = cloudant.db.use(config.db.dbname);

function findById(cid, callback) {
  
  db.find({selector:{payload:{cube:cid}}}, function(er, result) {
    if (er) {
      throw er;
    }

    console.log('Found %d documents with id: ' + cid, result.docs.length);
  /*  for (var i = 0; i < result.docs.length; i++) {
      console.log('  Doc id: %s', result.docs[i].payload.cube);
    }*/

    callback({data:result.docs});
  });
}

module.exports = { findById };

