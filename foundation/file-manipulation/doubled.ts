// Create a method that decrypts duplicated-chars.txt
//https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/file-manipulations/assets/duplicated-chars.txt
const fs = require('fs');
let url: string = "./doubled.txt"

function decrypt(path: string): string {
    let content: string = fs.readFileSync(path,"utf-8");
    let lines: string [] = content.split("\n");
    let characters: string [][] = [];
    let newCharacters: string [] []= [];
    let newLines: string [] = []

    for (let i: number = 0; i < lines.length; i++){
        characters.push(lines[i].split(""));
    }   
    for (let i: number = 0; i < characters.length; i++){
        let arr: string [] = [];
        for (let j: number = 0; j<characters[i].length; j++){
            if(j%2 == 0){
            } else {
                arr.push(characters[i][j]);
            }
        }
        newCharacters.push(arr)
    }
    for (let i: number = 0; i < newCharacters.length; i++) {
      newLines.push(newCharacters[i].join(""));         
    }


fs.writeFileSync("./not-doubled.txt", newLines.join("\n"));
return

}
try {
    decrypt(url);
} catch (err){
    console.log(err);
}
export{}