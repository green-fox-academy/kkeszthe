/*We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.

Create a map with the following key-value pairs.

Name (key)	Phone number (value)
William A. Lathan	405-709-1865
John K. Miller	402-247-8568
Hortensia E. Foster	606-481-6467
Amanda D. Newland	319-243-5613
Brooke P. Askew	307-687-2982
Create an application which solves the following problems.

What is John K. Miller's phone number?
Whose phone number is 307-687-2982?
Do we know Chris E. Myers' phone number?*/

let phoneBook: {[key: string]: string} = {
    "William A. Lathan":	"405-709-1865",
    "John K. Miller":	"402-247-8568",
    "Hortensia E. Foster":	"606-481-6467",
    "Amanda D. Newland":	"319-243-5613",
    "Brooke P. Askew":	"307-687-2982"
}
function searchNumber(name: string): string{
    let arrPB: string [][] = Object.entries(phoneBook);
    let phoneNumber: string = "";
    arrPB.map(function(value: string [], index: number){
        if (value[0] == name){
            phoneNumber = value[1];
        }
    })
    return phoneNumber;
}
function searchName (number: string): string{
    let arrPB: string [][] = Object.entries(phoneBook);
    let phoneName: string = "";
    arrPB.map(function(value: string [], index: number){
        if (value[1] == number){
            phoneName = value[0];
        }
    })
    return phoneName;
}
function searchIfExist(name: string): boolean{
    let arrPB: string [][] = Object.entries(phoneBook);
    let exist: boolean = false;
    arrPB.map(function(value: string [], index: number){
        if (value[0] == name){
            exist = exist || true;
        }
    })
    return exist;
}

console.log(searchNumber("John K. Miller"));
console.log(searchName("307-687-2982"));
console.log(searchIfExist("Chris E. Myers"));