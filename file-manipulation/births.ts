 // Create a function that
    // - takes the name of a CSV file as a parameter,
    //   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
    // - returns the year when the most births happened.
    //   - if there were multiple years with the same number of births then return any one of them

    // You can find such a CSV file in this directory named births.csv
    // If you pass "births.csv" to your function, then the result should be either 2006, or 2016.

    const fs = require("fs");

    function mostBirth (fileName: string): string {
        let path: string = "";
        path = path.concat("./",fileName);
        let lines: string [][] = fs.readFileSync(path,"utf-8")
        .split("\n")
        .map((i: string) => i.split(";"));
        let years: string[] = [];
        lines.map((i) => years.push(i[1].slice(0,4)));
        let uniYears: string[] = [];
        years.map(function(value: string, index: number){
            if (uniYears.includes(years[index])){
            } else {
            uniYears.push(years[index]);
            }
        })

        let counter1: {[key: string]: number} = {};
        uniYears.map(function(valueUY,indexUY) {
            let subCounter: number = 0;
            years.map((valueY,indexY) => {
                if(valueUY == valueY){
                    subCounter = subCounter +1;
                    return counter1[valueUY] = subCounter
                }
            })
        })
        

        return Object.keys(counter1)[Object.values(counter1)
            .indexOf(Object.values(counter1)
            .sort((a,b) => b-a)[0])];
    }

    console.log(mostBirth("births.csv"))

    export{};