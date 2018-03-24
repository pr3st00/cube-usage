# cube-usage
Cube Usage application

# Description

This is an application which will subscribe to a **MQTT** topic and will update the screen real-time based on the data received. This is part of an **IOT** program which we are running here and the whole recipe can be found at:

> https://developer.ibm.com/recipes/tutorials/category/internet-of-things-iot

# Messages

The message will contain data about the current cube status and some device metadata:

 {"cube":"NAME","occupied":true,"position":{"x":1,"y":1},"timestamp":1521929102986}

The coordinates helps the application for identifying where the cube is located in the graphical view.

## Configuration

All application config parameters are located on the config.js file and should be modified to reflect your configuration.


```
