'use strict';

// only goat click survey code goes here
const image1Element = document.getElementById('image1');
const image2Element = document.getElementById('image2');
const goatContainer = document.getElementById('goat-container');

function displayRandomGoats() {
  let randomGoatIndex1 = Math.floor(Math.random() * goats.length);
  let randomGoatIndex2 = Math.floor(Math.random() * goats.length);

  while (randomGoatIndex1 === randomGoatIndex2) {
    randomGoatIndex2 = Math.floor(Math.random() * goats.length);
  }
  // while(image1Element.alt === goats[randomGoatIndex1].name) {
  //   // reroll again sorry.
  // }

  image1Element.src = goats[randomGoatIndex1].src;
  image1Element.alt = goats[randomGoatIndex1].name;
  image2Element.src = goats[randomGoatIndex2].src;
  image2Element.alt = goats[randomGoatIndex2].name;
  goats[randomGoatIndex1].timesSeen++;
  goats[randomGoatIndex2].timesSeen++;
}

function handleGoatClicks(event) {
  // console.log(event.target.alt);

  for (let i = 0; i < goats.length; i++) {
    if (goats[i].name === event.target.alt) {
      goats[i].timesClicked++;
    };
  }
  console.log(goats);
  displayRandomGoats();
  save();
}

goatContainer.addEventListener('click', handleGoatClicks);
displayRandomGoats();
