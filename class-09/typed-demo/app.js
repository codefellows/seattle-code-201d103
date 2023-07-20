'use strict';

let headerElement = document.getElementById('header');
let formElement = document.getElementById('pokemon-form');

const pokedex = [];

function Pokemon(name,type,isShiny) {
  this.name = name;
  this.type = type;
  this.isShiny = isShiny === 'true' ? true : false;
  pokedex.push(this);
}
Pokemon.prototype.display = function() {
  let tableBody = document.getElementById('table-body');

  let row = document.createElement('tr');
  let nameCell = document.createElement('td');
  let typeCell = document.createElement('td');
  let shinyCell = document.createElement('td');

  nameCell.textContent = this.name;
  typeCell.textContent = this.type;
  shinyCell.textContent = this.isShiny;

  row.appendChild(nameCell);
  row.appendChild(typeCell);
  row.appendChild(shinyCell);
  tableBody.appendChild(row);
}

// attached functions to an element directly
// when called we give the name of an event, and a callback function to run only when that event occurs.
headerElement.addEventListener('click', function(event) { // defining a parameter.
  console.log(event.target.textContent);
  console.log(event.target.id);
  console.log('header has been clicked!!!');
});

function handleSubmit(event) {
  event.preventDefault();

  console.log(event.target.pokemonName.value);
  console.log(event.target.pokemonType.value);
  console.log(event.target.isFoil.value);

  let pokemonName = event.target.pokemonName.value;
  let pokemonType = event.target.pokemonType.value;
  let isFoil = event.target.isFoil.value;
  if (!pokemonName || !pokemonType || !isFoil) {
    alert('Need proper pokemon values!');
  } else {
    let pokemon = new Pokemon(pokemonName, pokemonType, isFoil);
    console.log(pokedex);
    pokemon.display();
  }
}
formElement.addEventListener('submit', handleSubmit);
console.log(pokedex);
