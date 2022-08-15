import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket{
    // properties and methods
    totalCapacityKg: number;
     name: string;
     cargoItems :Cargo[] = [];
     astronauts: Astronaut[] = [];

     constructor(name: string,totalCapacityKg: number) {
       this.name = name;
       this.totalCapacityKg = totalCapacityKg;
     }
     
     sumMass(items: Payload[]): number{
        let sumMass: number = 0;
        for(let i= 0; i<items.length;i++){
            sumMass += items[i].massKg;
        }
        return sumMass;
     }
     //   Returns the sum of all items using each item's massKg property
     
     
     currentMassKg(): number{
        return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
     }
//Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
     

     canAdd(item: Payload): boolean{
        if(((this.currentMassKg()+item.massKg)) <= this.totalCapacityKg){
            return true;
        }
        else
        {
            return false;
        }
     }
//Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
     

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        else
        {
            return false;
        }
    }
//Uses this.canAdd() to see if another item can be added.
//If true, adds cargo to this.cargoItems and returns true.
//If false, returns false.




     addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        else
        {
            return false;
        }
     }
     


    // Uses this.canAdd() to see if another astronaut can be added.
    //If true, adds astronaut to this.astronauts and returns true.
    //If false, returns false.
}