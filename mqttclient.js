var mqtt = require('mqtt')

var client;

function connect()
{
    client  = mqtt.connect(
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
