let object: {[key: string]: string } = {
    "978-1-60309-452-8":	"A Letter to Jo",
    "978-1-60309-459-7":	"Lupus",
    "978-1-60309-444-3":	"Red Panda and Moon Bear",
    "978-1-60309-461-0":	"The Lab"}
    let keys: string[] = Object.keys(object);
    let values: string[] = Object.values(object);
for(let i = 0; i < values.length; i++){

    console.log(values[i] + " (ISBN: " + keys[i] + ")");
}
delete object["978-1-60309-444-3"];
delete object[keys[values.indexOf("The Lab")]];
object["978-1-60309-450-4"] = "They Called Us Enemy";
object["978-1-60309-453-5"] =	"Why Did We Trust Him?";
if(object["478-0-61159-424-8"]!=undefined){
    console.log("478-0-61159-424-8 has a value");
}
else{
    console.log("478-0-61159-424-8 does not have value");
}
console.log(object["978-1-60309-453-5"]);
