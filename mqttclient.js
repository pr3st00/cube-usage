'use strict'

var mqtt = require('mqtt')
var config = require('./config')

var client;

function connect()
{
    var url = "mqtt://" + config.bluemix.orgId + ".messaging.internetofthings.ibmcloud.com";

    client  = mqtt.connect(
        url,
        {
            clientId : config.mqtt.clientId,
            username:  config.mqtt.username,
            password:  config.mqtt.password
        }
    )
    
    client.on('connect', function () {
        client.subscribe(config.mqtt.topic)
    })
    
}

function addHandler(io)
{
    client.on('message', function (topic, message) {
        console.log("Received message : ", message.toString())
        io.emit("cube", message.toString())
    })
}

function disconnect()
{
    client.end()
}

module.exports = { connect, disconnect, addHandler };
