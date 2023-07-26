'use strict';


const person = { name: 'jacob '}

// adding / saving -> takes a key : value pair.
localStorage.setItem('name', 'Jacob');

console.log(localStorage);
console.log(person.name);

// JSON.stringify - takes an object and converts it to Javascript Object Notation.
{ name: 'jacob '}
`{ name: 'jacob '}`

localStorage.setItem('person', JSON.stringify(person));
// console.log(localStorage.person);

// loading from localstorage
let rawPersonData = localStorage.getItem('person');
let personValue = JSON.parse(rawPersonData);
console.log(personValue.name);

// removing / resetting
// localStorage.clear();

console.log(localStorage);
