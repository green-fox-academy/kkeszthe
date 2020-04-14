import { Aircraft } from "./Aircraft";
import { Carrier } from "./Carrier";

let enterprise1: Carrier = new Carrier(1000);
let enterprise2: Carrier = new Carrier(2000);
let enterprise3: Carrier = new Carrier();

enterprise1.add(new Aircraft("F16"));
enterprise1.add(new Aircraft("F16"));
enterprise1.add(new Aircraft("F35"));
enterprise1.add(new Aircraft("F35"));

enterprise2.add(new Aircraft("F16"));
enterprise2.add(new Aircraft("F35"));
enterprise2.add(new Aircraft("F35"));
enterprise2.add(new Aircraft("F35"));

enterprise3.add(new Aircraft("F35"));
enterprise3.add(new Aircraft("F35"));
enterprise3.add(new Aircraft("F35"));
enterprise3.add(new Aircraft("F35"));

enterprise1.fill();
enterprise2.fill();
enterprise3.fill();

enterprise1.fight(enterprise3);
enterprise3.fight(enterprise1);
enterprise2.fight(enterprise1);

enterprise1.fill();
enterprise2.fill();
enterprise3.fill();

enterprise1.fight(enterprise2);
enterprise3.fight(enterprise1);
enterprise2.fight(enterprise1);

enterprise1.fill();
enterprise2.fill();
enterprise3.fill();


console.log(enterprise1.getStatus());
console.log("\n");
console.log(enterprise2.getStatus());
console.log("\n");
console.log(enterprise3.getStatus());