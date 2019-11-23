let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
let listB: string[] = [];
for (let i =0; i < listA.length; i++){
    listB.push(listA[i]);
}
if(listA.indexOf("Durian")!=-1){
    console.log("List A contains Durian");
}
listB.splice(listB.indexOf("Durian"),1);
listA.splice(4,0,"Kiwifruit");
if(listA.length>listB.length){
    console.log("List A is longer");
}
else{
    console.log("List B is longer");
}
console.log(listA.indexOf("Avocado"));
console.log(listB.indexOf("Durian"));
listB.push("Passion Fruit","Pomelo");
console.log(listA[2]);