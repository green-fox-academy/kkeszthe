export class Aircraft {
    type: string = "F16" || "F35";
    maxAmmo: number;
    ammo: number;
    baseDamage: number;
    totalDamage: number;

    constructor(type: string){
        this.type = type;
        if(type === "F16"){
            this.maxAmmo = 8;
            this.baseDamage = 30;
        } else if( type === "F35"){
            this.maxAmmo = 12;
            this.baseDamage = 50;
        }
        this.ammo = 0;
        this.totalDamage = 0;
    }

    fight(): number{
        let damage: number = this.ammo*this.baseDamage
        this.totalDamage += damage
        this.ammo = 0
        return damage;
    }

    refill(ammunition: number){
        let existingAmmo = this.ammo;
        ammunition > (this.maxAmmo-this.ammo) ? this.ammo = this.maxAmmo : this.ammo += ammunition;
        //if(ammunition > (this.maxAmmo-this.ammo)){ this.ammo = this.maxAmmo} else { this.ammo += ammunition}
        return ammunition -= (this.ammo-existingAmmo);
    }

    getType(): string {
        return this.type;
    }

    getStatus(): string{
        return "Type "
         + this.type
         +", Ammo: "
         + this.ammo
         + ", Base Damage: "
         + this.baseDamage
         + ", All Damage: "
         + this.totalDamage;
    }

    isPriority(): boolean{
        if(this.type === "F16"){
            return false
        } else if (this.type === "F35") {
            return true
        }
    }


}