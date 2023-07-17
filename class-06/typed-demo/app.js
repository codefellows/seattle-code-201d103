'use strict';

const POKEDEX_ELEMENT = document.getElementById('pokedex'); // element to append to.

// method on the DOM that will search our HTMl for and element with the given id
let titleElement = document.getElementById('title');
console.log(titleElement.textContent);
// textContext - the text that display between 2 element tags
// titleElement.textContent = 'Youve been hacked!!';


// create totally new HTML Elements and render them on the page

let listItem = document.createElement('li');
listItem.textContent = 'I am a list item';
// listItem.id = 'list-item';
listItem.setAttribute('id', 'list-item');
// pokedexElement.appendChild(listItem);

// should store pokemon type things
const pokedex = [];

function pokeSpeak() {
  console.log(this.name.toUpperCase() + '!!!');
}

const squirtle = {
  name: 'Squirtle',
  type: 'water',
  hp: 100,
  abilities: ['water blast', 'bubble'],
  speak: pokeSpeak,
}

const bulbasaur = {
  name: 'Bulbasaur',
  type: 'grass',
  hp: 100,
  abilities: ['vine whip', 'tackle'],
  speak: function() {
    console.log(this.name.toUpperCase() + '!!!');
  }
}

const charmander = {
  name: 'Charmander',
  type: 'fire',
  hp: 100,
  abilities: ['ember', 'fire blast'],
  speak: function() {
    console.log(this.name.toUpperCase() + '!!!');
  }
}

console.log(squirtle, bulbasaur, charmander);

let nameElement = document.getElementById('pokemon-name');
nameElement.textContent += 'POKEMON_NAME';
// nameElement.textContent = nameElement.textContent + squirtle.name;

let typeElement = document.getElementById('pokemon-type');
typeElement.textContent += 'POKEMON_TYPE';

let healthElement = document.getElementById('pokemon-health');
healthElement.textContent += 'POKEMON_HP';

pokedex.push(squirtle);
pokedex.push(bulbasaur);
pokedex.push(charmander);

function createHTML(elementToCreate, contentToAdd, elementToAddTo) {
  let element = document.createElement(elementToCreate);
  element.textContent += contentToAdd;
  elementToAddTo.appendChild(element);
}


for (let i = 0; i < pokedex.length; i++) {
  let currentPokemon = pokedex[i];
  // try {
  currentPokemon.speak();
  console.log(currentPokemon.name + ' uses ' + currentPokemon.abilities[0]);
  // } catch (e) {
  //   console.log('ugh oh no speak');
  // }

  // console.log('made it here');

  // create 1 <li> and 3 <p> elements
  let listItemElement = document.createElement('li');
  // createHTML('p', currentPokemon.name, listItemElement);
  // createHTML('p', currentPokemon.type, listItemElement);
  // createHTML('p', currentPokemon.hp, listItemElement);
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');

  // add the textContent to each <p> element
  p1.textContent += currentPokemon.name;
  p2.textContent += currentPokemon.type;
  p3.textContent += currentPokemon.hp;

  // append each <p> element to the <li>
  listItemElement.appendChild(p1);
  listItemElement.appendChild(p2);
  listItemElement.appendChild(p3);
  // append the <li> to our <ol>
  POKEDEX_ELEMENT.appendChild(listItemElement);
}
