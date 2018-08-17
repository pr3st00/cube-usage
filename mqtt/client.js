'use strict'

const mqtt = require('mqtt')
const config = require('../config/config.json')

let client;

function connect() {
    let mqttConfig = config.mqtt.cube2;

    var url = "mqtt://" + mqttConfig.orgId + ".messaging.internetofthings.ibmcloud.com";
    var clientId = process.env.MQTT_CLIENT_ID || mqttConfig.clientId

    client = mqtt.connect(
        url,
        {
            clientId: clientId,
            username: mqttConfig.username,
            password: mqttConfig.password
        }
    )

    client.on('connect', function () {
        client.subscribe(mqttConfig.topic)
    })

}

function addHandler(io) {
    client.on('message', function (topic, message) {
        console.log("Received message : ", message.toString())
        io.emit("cube", message.toString())
    })
}

function disconnect() {
    client.end()
}

module.exports = { connect, disconnect, addHandler };
