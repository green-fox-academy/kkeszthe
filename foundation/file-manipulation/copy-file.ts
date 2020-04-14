// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require('fs');

function copy(file1: string, file2: string): boolean{
    let content = fs.readFileSync(file1, 'utf8');
    fs.writeFileSync(file2, content);
    let result: boolean;
if(fs.readFileSync(file1, 'utf8')==fs.readFileSync(file2, 'utf8')){
   result = true;
} 
return result
} try {
    console.log(copy("./test1.txt", "./test2.txt"));
} catch(err){
    console.log(false);
}
export{}