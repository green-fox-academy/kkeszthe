// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file
const fs = require("fs");

console.log(ticTacResult("win-o.txt"))
// Should print "O"

console.log(ticTacResult("win-x.txt"))
// Should print "X"

console.log(ticTacResult("draw.txt"))
// Should print "Draw"

function ticTacResult(fileName: string): string {
    let path: string = "";
    path = path.concat("./",fileName);
    let content: string = fs.readFileSync(path,"utf-8");
    let lines: string [] = content.split("\n");
    let linesColoumns: string [][] = lines.map((i: string) => i.split(""));

    if (linesColoumns[0][0] == linesColoumns[0][1] && linesColoumns[0][1] == linesColoumns[0][2]){
        return linesColoumns[0][0];
    } else if (linesColoumns[1][0] == linesColoumns[1][1] && linesColoumns[1][1] == linesColoumns[1][2]){
        return linesColoumns[1][0];
    } else if (linesColoumns[2][0] == linesColoumns[2][1] && linesColoumns[2][1] == linesColoumns[2][2]){
        return linesColoumns[2][0];
    } else if (linesColoumns[0][0] == linesColoumns[1][0] && linesColoumns[1][0] == linesColoumns[2][0]){
        return linesColoumns[0][0];
    } else if (linesColoumns[0][1] == linesColoumns[1][1] && linesColoumns[1][1] == linesColoumns[2][1]){
        return linesColoumns[0][1];
    } else if (linesColoumns[0][2] == linesColoumns[1][2] && linesColoumns[1][2] == linesColoumns[2][2]){
        return linesColoumns[0][2];
    } else if (linesColoumns[0][0] == linesColoumns[1][1] && linesColoumns[1][1] == linesColoumns[2][2]){
        return linesColoumns[0][0];
    } else if (linesColoumns[0][2] == linesColoumns[1][1] && linesColoumns[1][1] == linesColoumns[2][0]){
        return linesColoumns[0][2];
    } else {
        return "Draw"
    }
    
    return
}

export{}