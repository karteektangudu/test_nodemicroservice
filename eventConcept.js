// 1:Simple EVent Example
var event = require("events");

var sEvent = new event.EventEmitter();
sEvent.on("speak",()=>{
    console.log("speak event");
});

sEvent.emit("speak");

//2:Create an object with events