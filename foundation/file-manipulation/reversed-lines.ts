// Create a method that decrypts reversed-lines.txt
const fs = require('fs');
let path: string = "./reversed-lines.txt"

function decrypt(path: string): string {
    let content: string = fs.readFileSync(path,"utf-8");
    let lines: string [] = content.split("\n");
    let newLines: string [] = [];
    for (let i: number = 0; i < lines.length; i++){
        function reverse(text: string): string{
            let array: string[]=text.split("",text.length)
            let newArr: string[]=[];
            for(let i= 0; i<=text.length; i++){
                newArr.push(array[array.length-i]);
            }
            return newArr.join("")
        }
        newLines.push(reverse(lines[i]));
        
        
    }
    fs.writeFileSync("./not-reversed.txt", newLines.join("\n"));
    return

}
try {
    decrypt(path);
} catch (err){
    console.log(err);
}
export{}