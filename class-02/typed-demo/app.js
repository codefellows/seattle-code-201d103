'use strict';


// let name = prompt('What is you name?');
// if (name) {
//   alert('Thats a great name!');
// } else if (name === null) {
//   alert('Oh I see');
// }


// let age = prompt('What is your age?');
// if (age > 30) {
//   alert('What a great Age!');
// }

// let lovesJs = prompt('Do you love JS?');
// if (lovesJs) {
//   alert('Me Too!')
// } else {
//   alert('Aww too bad');
// }

let foodPreference = prompt('What is your favorite food?');
switch(foodPreference.toLowerCase()) { // normalizing our user input to all lower case characters.
  case 'mac and cheese':
    alert('one of my favorites!');
    break;
  case 'fried chicken':
    alert('ALso one of my favorites');
    break;
  case 'ramen':
    alert('The Best!!');
    break;
  case 'gumbo':
    alert('A southern classic');
    break;
  default:
    alert('I dont know that food');
}

// if (foodPreference === 'mac and cheese') {
//   alert();
// } else if (foodPreference === )
