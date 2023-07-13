'use strict';

function lab02() {

  let question1 = "Is coffee nicer than tea (y/n)";
  let question2 = "Do you like Star Trek (y/n)?";
  let question3 = "Do you like animals (y/n)?";
  let question4 = "Do you know how to code (y/n)?";
  let question5 = "Have you used ChatGPT (y/n)?";
  let userName = prompt("What is your name?");

  let welcomeHeading = document.getElementById("welcomeHeading");
  welcomeHeading.textContent = "Welcome " + userName + ", here are things about me (Paul Brown)";

  // console.log("The user's name is: " + userName);
  alert("The user's name is: " + userName);

  // This is another way:
  const questions = [question1, question2, question3, question4, question5];
  const responses = [];

  for (let i=0; i < questions.length; i++) {
    let newResponse = prompt(questions[i]).toLowerCase();

    while (newResponse !== 'y' && newResponse !== 'n' && newResponse !== 'yes' && newResponse !=='no') {
      // console.log(newResponse);
      alert("Incorrect response, please try again. Answer y/n.")
      newResponse = prompt(questions[i]).toLowerCase();
    }
    responses.push(newResponse);
    // console.log(questions[i] + ' was answered with: ' + responses[i]);
    alert(questions[i] + ' was answered with: ' + responses[i]);
  }
}

function lab03() {
  // In this code, Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
  // By multiplying this value by 10, you get a random decimal number between 0 (inclusive) and 10 (exclusive).
  // Applying Math.floor() rounds down the decimal to the nearest whole number.
  // Finally, adding 1 shifts the range to be between 1 and 10 instead of 0 and 9.
  const randomNumber = Math.floor((Math.random()* 10)) + 1;

  const MAX_NUMBER_GUESSES = 4; // hard-coded requirement
  const MAX_TRIVIA_GUESSES = 6; // hard-coded requirement
  let numNumberGuesses = 0;
  let numTriviaGuesses = 0;
  let correctNumberAnswer = false;
  let correctTriviaAnswer = false;
  let userAnswer = '';
  let hint = '';

  console.log('Shh, don\'t tell anyone, but this is my secret number: ' + randomNumber);

  // This is the number guessing game
  do {
    userAnswer = prompt(hint + 'Please guess a number between 1 and 10 (inclusive).\nYou have ' + (MAX_NUMBER_GUESSES - numNumberGuesses) + ' guesses remaining.');
    userAnswer = parseInt(userAnswer);
    numNumberGuesses += 1;
    if (userAnswer === randomNumber) {
      hint = 'Success!\n\n';
      correctNumberAnswer = true;
    } else if (userAnswer < randomNumber) {
      hint = 'Too low\n\n';
    } else {
      hint = 'Too high\n\n';
    }
  } while (numNumberGuesses < MAX_NUMBER_GUESSES && !correctNumberAnswer);

  if (correctNumberAnswer) {
    alert('You got the answer, yay!')
  } else {
    alert('All wrong. The number was: ' + randomNumber);
  }

  const cryptos = ['bitcoin', 'ethereum', 'doge', 'monero', 'solana', 'litecoin'];
  hint = '';

  while (numTriviaGuesses < MAX_TRIVIA_GUESSES && !correctTriviaAnswer) {
    let answer = prompt(hint + 'Name a popular cryptocurrency.').toLowerCase();
    for (let j=0; j < cryptos.length; j++){
      if (answer === cryptos[j]) {
        correctTriviaAnswer = true;
        break;
      }
    }
    numTriviaGuesses += 1;
    hint = 'Nope, try again.\n\nYou have ' + (MAX_TRIVIA_GUESSES - numTriviaGuesses) + ' attempts left\n\n';
  }

  if (correctTriviaAnswer) {
    alert('Yes, that is a valid crypto!');
  } else {
    alert('Alas, you never got a valid crypto :(');
  }

  alert('The list of cryptos include: ' + cryptos)

  let scoreDetails = '<strong>YOUR SCORES</strong><br>';
  scoreDetails += '<u>Number Guessing Game</u><br>';
  if (correctNumberAnswer) {
    scoreDetails += 'You guessed the number in ' + numNumberGuesses + ' attempts.\n';
  } else {
    scoreDetails += 'You never guessed the number (it was ' + randomNumber + ').\n';
  }

  scoreDetails += '<br><br><u>Triva Game</u><br>';
  if (correctTriviaAnswer) {
    scoreDetails += 'You answered a cryptocurrency in ' + numTriviaGuesses + ' attempts.\n';
  } else {
    scoreDetails += 'You never guessed a correct cryptocurrency :(\n';
  }


  document.getElementById("variable-value").innerHTML = scoreDetails;
}


lab02()
lab03()


