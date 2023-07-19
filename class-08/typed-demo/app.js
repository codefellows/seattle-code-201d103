'use strict';

function Pokemon(name, type) {
  this.name = name;
  this.type = type;
}

Pokemon.prototype.speak = function () {
  console.log(this.name.toUpperCase() + '!!!');
}

function PokemonCard(name, type, rarity, isFoil) {
  Pokemon.call(this, name, type); // calls our POkemon constructor with the object being created by the PokemonCard constructor
  this.rarity = rarity;
  this.isFoil = isFoil;
}


/**
 // magic from our Object constructor
 * @params destination {PROTOTYPE}
 * @params source {PROTOTYPE}
 */
Object.setPrototypeOf(PokemonCard.prototype, Pokemon.prototype); // combines the prototypes of the 2 arguments into the Prototype of the first argument, the second prototype remains unchanged.
PokemonCard.prototype.size = 100;

let pikachu = new Pokemon('Pikachu', 'electric');
let charizard = new PokemonCard('Charizard', 'fire', 'rare', false);

pikachu.speak();
charizard.speak();
console.log(pikachu);
console.log(charizard);

Number.prototype.calculateDogYears = function () {
  return this * 7;
}

Array.prototype.sum = function () {
  let sum =0 ;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}

// function DogNumber(number) {
//   Number.call(this)
// }

let age = 7;
let values = [1,2,3]
console.log(values.sum());
console.log(age.calculateDogYears());
