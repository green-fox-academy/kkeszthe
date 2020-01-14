class DiceSet {
    dice: number[];
    readonly numOfDices: number = 6;
  
    roll(): number[] {
      this.dice = [];
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice.push(Math.floor(Math.random() * 6 + 1));
      }
      return this.dice;
    }
  
    reroll(index?: number): void {
      if (index === undefined) {
        for (let i = 0; i < this.numOfDices; i++) {
                this.dice[i] = Math.floor(Math.random() * 6 + 1);
        }
      } else {
        this.dice[index] = Math.floor(Math.random() * 6 + 1);
      }
    }
  
    getCurrent(index?: number): number[] | number {
      if (index === undefined) {
        for (let i = 0; i < this.numOfDices; i++) {
          return this.dice;
        }
      } else {
        return this.dice[index];
      }
    }

    private six(index: number): number {
        if(this.dice[index] === 6){
          return this.dice[index];
        } else {
              this.reroll(index)
              if(this.dice[index] < 6){
              this.six(index);
              } else {
                  return this.dice[index];
              }
        }
    }

    allSixes (): number[]{
        for(let i = 0; i < 6; i++){
          this.six(i)
            }
          return this.dice
    }

  }
  
  // You have a `DiceSet` class which has a list for 6 dice
  // You can roll all of them with roll()
  // Check the current rolled numbers with getCurrent()
  // You can reroll with reroll()
  // Your task is to roll the dice until all of the dice are 6
  
  let diceSet = new DiceSet();
  
  console.log(diceSet.roll());

  function six (set: DiceSet, index: number): number {
      if(set.dice[index] === 6){
        return set.dice[index];
      } else {
            set.reroll(index)
            if(set.dice[index] < 6){
            six(set,index);
            } else {
                return set.dice[index];
            }
      }
  }

  function allSixes (set: DiceSet): DiceSet{
      for(let i = 0; i < 6; i++){
        six(set,i)
          }
        return set
  }

  console.log(diceSet.getCurrent());
  
  console.log("------------------");
  
  diceSet.reroll();
  console.log(diceSet.getCurrent());
  
  console.log("------------------");
  
  console.log(diceSet.getCurrent(5));
  diceSet.reroll();
  console.log(diceSet.getCurrent());
  
  console.log("------------------");
  
  diceSet.reroll(4);
  console.log(diceSet.getCurrent());

  console.log("------------------");

 
  allSixes(diceSet);

  console.log(diceSet.getCurrent());

  console.log("------------------");

  console.log(diceSet.roll());
  console.log(diceSet.allSixes());