// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');
let path: string = "./log.txt"

function decrypt(path: string): string {
    let content: string = fs.readFileSync(path,"utf-8");
    let lines: string [] = content.split("\n");
    let unique: string [] = [];
    for(let i: number = 0; i < lines.length; i++){
        unique.push(lines[i].slice(lines[i].search("   ")+3,lines[i].search("   ")+14));
    }
    function uniqueIP(arr: string[]): string[] {
        const uniArr: string[] = [];
        for(let i = 0; i < arr.length; i++){
            
         if(uniArr.includes(arr[i])){}
       
            else{
                uniArr.push(arr[i]);
             } 
        
        }  
        return uniArr
    }    

fs.writeFileSync("./uniqueIPs.txt", uniqueIP(unique).join("\n"));
return

}
function ratio (path: string): string {
    let content: string = fs.readFileSync(path,"utf-8");
    let lines: string [] = content.split("\n");
    let counter1: number = 0
    let counter2: number = 0
    for(let i: number = 0; i < lines.length; i++){
        if (lines[i].indexOf("POST")>0){
            counter1 = counter1 + 1;
        } else {
            counter2 = counter2 + 1;
        };
    }
    return "Ratio of GET/POST is " + counter1 + "/" + counter2;
}
try {
    decrypt(path);
    console.log(ratio(path));
} catch (err){
    console.log(err);
}
export{}