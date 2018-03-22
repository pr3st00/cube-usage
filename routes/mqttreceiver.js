var express = require('express');
var router = express.Router();

var mqtt = require('mqtt')
var client  = mqtt.connect(
  'mqtt://ksp4zs.messaging.internetofthings.ibmcloud.com',
  {
    clientId : "a:ksp4zs:appId",
    username:  "a-ksp4zs-1nmmupiwoq",
    password:  "H1?ae65zhkIWItsi)u"
  }
)

client.on('connect', function () {
  client.subscribe('iot-2/type/Baia/id/raspi_leandro/cmd/vacancyStatus/fmt/json')
})
 
client.on('message', function (topic, message) {
  console.log(message.toString())
  //client.end()
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
