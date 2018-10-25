/**below code provide an example for using events
 * 
 * 
 */

var events=require("events");//getting an object from events module
var eventsEmitter=new events.EventEmitter();// creating evenEmitter object


//a simple function
var ringbell=function(){
    console.log("Ring Ring Ring");
}

eventsEmitter.on("doorOpen",ringbell);//binding event and the function together
eventsEmitter.on("bellRings",function(message){console.log(message);});//using callback function

eventsEmitter.emit("doorOpen");//calling the event
eventsEmitter.emit("bellRings","welcome to the dugeon");