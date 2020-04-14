let list: string [] = [];
console.log(list.length);
list.push("William");
if(list.length==0){
    console.log("empty");
}
else{
    console.log("not empty");
}
list.push("John");
list.push("Amanda");
console.log(list.length);
console.log(list[2]);
list.forEach(function(value){
    console.log(value);
});
for(let i = 0;i < list.length; i++){
    console.log((i+1) + ". " + list[i]);
}
list.splice(1,1);
for(let i = 0;i < list.length; i++){
    console.log(list[list.length-1-i]);
}
list.splice(0,list.length);