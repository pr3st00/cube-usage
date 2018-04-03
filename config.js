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

config.db = {
    host : "4c1b9c3f-b41b-482b-9e07-9d9fbfe73997-bluemix.cloudant.com",
    port : 443,
	dbname :  "occupied",
    username : "4c1b9c3f-b41b-482b-9e07-9d9fbfe73997-bluemix",
    password : "db04388642355cf9d5918024b09ef020939b72c7c5f0477d000e7c43313e0627"
};

module.exports = config;
