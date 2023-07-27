'use strict';

// add any functions shared by both files.
const goats = load(); // important functionality to load data from local storage

function Goat(name, src, timesClicked = 0, timesSeen = 0) {
  this.name = name;
  this.src = src;
  this.timesClicked = timesClicked;
  this.timesSeen = timesSeen;
}

// set all click tracking data into localStorage
function save() {
  let valuesToStore = JSON.stringify(goats);
  localStorage.setItem('chartData', valuesToStore);
  console.log(localStorage.chartData);
}

function load() {
  let rawData = localStorage.getItem('chartData');
  let chartObject = JSON.parse(rawData);
  // if we need Constructor functionality -> loop and recreate our Goat Objects;
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
