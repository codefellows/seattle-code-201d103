'use strict';

const POKEDEX_ELEMENT = document.getElementById('pokedex');
const POKEDEX_TABLE = document.getElementById('table-body');
const pokedex = [];

function Pokemon(nameValue, typeValue) {
  this.name = nameValue;
  this.type = typeValue;
  // this.display();
}

Pokemon.prototype.hp = 100;
Pokemon.prototype.speak = function () {
  console.log(this.name.toUpperCase() + '!!!');
}
Pokemon.prototype.displayList = function () {
  // create a list item??
  let listItem = document.createElement('li');
  listItem.textContent = `Name: ${this.name}, Type: ${this.type}`;
  POKEDEX_ELEMENT.appendChild(listItem);
}
Pokemon.prototype.displayTable = function () {
  let rowElement = document.createElement('tr'); // <tr></tr>
  let nameElement = document.createElement('td');
  let typeElement = document.createElement('td');

  nameElement.textContent = this.name;
  typeElement.textContent = this.type;

  rowElement.appendChild(nameElement);
  rowElement.appendChild(typeElement);
  POKEDEX_TABLE.appendChild(rowElement);
}

let jacob = new Pokemon('Jacob', 'javascript');
let michael = new Pokemon('Michael', 'javascript');
let mark = new Pokemon('Mark', 'java');

michael.hp = 80;
// jacob.displayList();
// michael.displayList();
// mark.displayList();
jacob.displayTable();
michael.displayTable();
mark.displayTable();

function speak() {
  console.log(this.name.toUpperCase() + '!!!');
}

let alsoJacob = {
  name: 'Jacob',
  type: 'javascript',
  hp: 100,
  speak: speak,
}
let alsoMichael = {
  name: 'Michael',
  type: 'javascript',
  hp: 100,
  speak: function () {
    console.log(this.name.toUpperCase() + '!!!');
  }
}

console.log(jacob.hp, michael.hp);
jacob.speak();
michael.speak();
console.log(alsoJacob, alsoMichael);
