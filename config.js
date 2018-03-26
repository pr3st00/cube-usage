'use strict'

var config = {};

config.app = {
    max_x : "8",
    max_y : "2"
}

config.nodejs = {
    port : "8081"
}

config.bluemix = {
    orgId : "ksp4zs"
}

config.mqtt = {
    clientId : "a:ksp4zs:localApp1",
    username : "a-ksp4zs-1nmmupiwoq",
    password : "H1?ae65zhkIWItsi)u",
    topic    : "iot-2/type/Baia/id/raspi_leandro/cmd/vacancyStatus/fmt/json"
};

module.exports = config;
