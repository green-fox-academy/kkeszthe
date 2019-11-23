let map: {[key: number]: string } = {

}
if (Object.keys(map).length == 0){
    console.log("empty");
}
else{
    console.log("not empty");
}
map[97] = "a";
map[98] = "b";
map[99] = "c";
map[65] = "A";
map[66] = "B";
map[67] = "C";
console.log(Object.keys(map));
console.log(Object.values(map));
map[68] = "D";
console.log(Object.keys(map).length);
console.log(map[99]);
delete map[97];
if(map[100]=undefined){
    console.log("Key 100 does not have value yet");
}
else{
    console.log("100: " + map[100]);
}
let key: string [] = (Object.keys(map));
for(let i = 0; i < key.length; i++){
    delete map[parseInt(key[i])];

}
console.log(Object.keys(map));