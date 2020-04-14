import { Aircraft } from "./Aircraft";

export class Carrier {
    aircrafts: Aircraft[] = [];
    ammo: number;
    health: number;

    constructor(ammo: number = 5000, health: number = 5000){
        this.aircrafts;
        this.ammo = ammo;
        this.health = health
    }

    add(newAircraft: Aircraft): Aircraft[] {
        this.aircrafts.push(newAircraft);
        return this.aircrafts;
    }

    fill(){
        let totalAmmoNeeded: number = 0;
        this.aircrafts.forEach((element) => {
            totalAmmoNeeded += element.maxAmmo-element.ammo;
        })
        if (totalAmmoNeeded > this.ammo && this.ammo < 0){
            this.aircrafts.forEach((element) => {
                if (element.isPriority()) {
                this.ammo = element.refill(this.ammo)
                }
                
            })
            this.aircrafts.forEach((element) => {
                this.ammo = element.refill(this.ammo);           
            })
        } else if (totalAmmoNeeded < this.ammo){
            this.aircrafts.forEach((element) => {
                this.ammo = element.refill(this.ammo);           
            })
        } else {
            throw "Carrier ammunition storage is empty!";       
        }
        
    }

    fight(carrier: Carrier): void {
        let totalDamage: number = 0;
        this.aircrafts.forEach((element) => {
            totalDamage += element.fight();
        })
        carrier.health -= totalDamage;
    }

    getStatus(): string {
        let totalDamage: number = 0;
        this.aircrafts.forEach((element) => {
            totalDamage += element.totalDamage
             })
        if(this.health <= 0){
            return "It's dead Jim :("
        } else {
            return ("HP: "
                + this.health
                + ", Aircraft count: "
                + this.aircrafts.length
                +", Ammo Storage: "
                + this.ammo
                    +", Total damage: "
                + totalDamage
                    + "\nAircrafts:\n"
                + this.aircrafts.map((element) : string => {return "Type "
                    + element.type
                    + ", Ammo: "
                    + element.ammo
                    + ", Base Damage: "
                    + element.baseDamage
                    + ", All Damage: "
                    + element.totalDamage
                    + "\n";
            }).join("")
            )
        }
    }
}