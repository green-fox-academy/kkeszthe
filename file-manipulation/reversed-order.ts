// Create a method that decrypts reversed-order.txt
const fs = require('fs');
let path: string = "./reversed-order.txt"

function decrypt(path: string): string {
    let content: string = fs.readFileSync(path,"utf-8");
    let lines: string [] = content.split("\n");
    let newLines: string [] = [];
    for (let i: number = lines.length-1; i >= 0; i--){
        newLines.push(lines[i])        
    }
    fs.writeFileSync("./not-reversed-order.txt", newLines.join("\n"));
    return

}
try {
    decrypt(path);
} catch (err){
    console.log(err);
}
export{}