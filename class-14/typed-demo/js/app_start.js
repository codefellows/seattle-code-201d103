'use strict';

const goats = load();
const image1Element = document.getElementById('image1');
const image2Element = document.getElementById('image2');
const goatContainer = document.getElementById('goat-container');

const chartCanvas = document.getElementById('myChart');
const chartButton = document.getElementById('view-results');
let chartObj = null; // null is falsey!! Which can be nice sometimes

function Goat(name, src, timesClicked = 0, timesSeen = 0) {
  this.name = name;
  this.src = src;
  this.timesClicked = timesClicked;
  this.timesSeen = timesSeen;
  // goats.push(this); -> anti-pattern, this causes some side effect
}

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

console.log(goats);
displayRandomGoats();

chartButton.addEventListener('click', function () {
  chartObj = createGoatChart();
  chartObj.data.datasets[0].data[0] = 10;
  console.log(chartObj);
  chartObj.update();
});
// chartButton.addEventListener('click', createGoatChart);

function createGoatChart() {
  const totalGoatClicks = [];
  const totalGoatViews = [];
  const goatNames = [];
  // look at all the goats and grab 2 values: timesClick, and times seen and add them to 2 arrays.
  for (let i = 0; i < goats.length; i++) {
    let currentGoat = goats[i];
    goatNames.push(currentGoat.name);
    totalGoatClicks.push(currentGoat.timesClicked);
    totalGoatViews.push(currentGoat.timesSeen);
  }
  console.log(totalGoatViews);
  // add those arrays to a new Chart as datasets.
  return new Chart(chartCanvas, {
    type: 'bar',
    data: {
      labels: goatNames, // array for labels??
      datasets: [{
        label: 'Times Seen',
        data: totalGoatViews,
        borderWidth: 1
      }, {
        label: 'Times Clicked',
        data: totalGoatClicks,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        }
      }
    }
  });
}

/**
 * Data Storage functionality
 */

// set all click tracking data into localStorage
function save() {
  let valuesToStore = JSON.stringify(goats);
  localStorage.setItem('chartData', valuesToStore);
  console.log(localStorage.chartData);
}

function load() {
  let rawData = localStorage.getItem('chartData');
  let chartObject = JSON.parse(rawData);
  // if we need Contructor functionality -> loop and recreate our Goat Objects;
  if (!chartObject) {
    return [
      new Goat('cruisin goat', 'assets/images/cruisin-goat.jpg'),
      new Goat('float your goat', 'assets/images/float-your-goat.jpg'),
      new Goat('goat away', 'assets/images/goat-away.jpg'),
      new Goat('goat logo', 'assets/images/goat-logo.png'),
      new Goat('goat out of hand', 'assets/images/goat-out-of-hand.jpg'),
      new Goat('kissing goat', 'assets/images/kissing-goat.jpg'),
      new Goat('sassy goat', 'assets/images/sassy-goat.jpg'),
      new Goat('smiling goat', 'assets/images/smiling-goat.jpg'),
      new Goat('sweater goat', 'assets/images/sweater-goat.jpg'),
    ];
  } else {
    console.log('RECREATE GOAT OBJECT');

    // loops through chartObject, for each goat in chartObject create a new Goat
  }
  return chartObject;
}
