const EventEmitter=require("events");
///console.log(events);
//EventEmitter event=new EventEmitter();
//int a=10;
let event=new EventEmitter();


event.on("Reached",()=>{
    console.log("Reached handled");

})
event.on("Done",()=>{
    console.log("Done handled");
})

function log()
{
    console.log("Working on log module");
    event.emit("Done");
}
log();
//event.emit("Reached");
