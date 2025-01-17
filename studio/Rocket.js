"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sumMass = 0;
        for (var i = 0; i < items.length; i++) {
            sumMass += items[i].massKg;
        }
        return sumMass;
    };
    //   Returns the sum of all items using each item's massKg property
    Rocket.prototype.currentMassKg = function () {
        return (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
    };
    //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    Rocket.prototype.canAdd = function (item) {
        if (((this.currentMassKg() + item.massKg)) <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    //Uses this.canAdd() to see if another item can be added.
    //If true, adds cargo to this.cargoItems and returns true.
    //If false, returns false.
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
