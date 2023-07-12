'use strict';

let question = 'What is one of my favorite foods?';

const possibleAnswers = ['Mac and Cheese', 'Fried Chicken', 'Ramen', 'Gumbo', 'Pizza'];
let hasUserAnsweredCorrectly = false;
let question6Attempts = 6

let response = prompt(question);
console.log(response);
for (let i = 0; i < possibleAnswers.length; i++) {
  if (possibleAnswers[i].toLowerCase() === response.toLowerCase()) {
    alert('You are correct');
    hasUserAnsweredCorrectly = true;
    break;
  }
  console.log('Here is our debug statement');
  debugger;
}

// here is where the loop
if (hasUserAnsweredCorrectly) {
  alert('Nice you answered a question correctly');
} else {
  alert('Woops something went wrong');
}

