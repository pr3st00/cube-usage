'use strict'

var mqtt = require('mqtt')
var config = require('./config')

var client;

function connect()
{
    var url = "mqtt://" + config.bluemix.orgId + ".messaging.internetofthings.ibmcloud.com";
    var clientId = process.env.MQTT_CLIENT_ID || config.mqtt.clientId

    client  = mqtt.connect(
        url,
        {
            clientId : clientId,
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
