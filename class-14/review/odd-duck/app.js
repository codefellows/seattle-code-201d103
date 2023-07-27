'use strict';

const products = load();
const image1Element = document.getElementById('image1');
const image2Element = document.getElementById('image2');
const image3Element = document.getElementById('image3');
const productContainer = document.getElementById('product-container');
const resultButton = document.getElementById('resultButton');
const canvasChart = document.getElementById('myChart');
let maxClicksAllowed = 25;
let rounds = 25;
let clicks = 0;


const state = {
  allProductsArray: [],
  indexArray: [],
};


function Product(name, src) {
  this.name = name;
  this.src = src;
  this.timesClicked = 0;
  this.timesSeen = 0;
  // products.push(this);
}

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('water can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');



displayRandomProducts();
console.log(products);

function displayRandomProducts() {
  let randomProductIndex1 = getRandomProductIndex();
  let randomProductIndex2 = getRandomProductIndex();
  let randomProductIndex3 = getRandomProductIndex();
  // Checking to make sure index values are not duplicated.
  // while (!lastImage.includes(products[randomProductIndex1]) &&
  // !lastImages.includes(products[randomProductIndex2]) &&
  // !lastImage.includes(products[randomProductIndex3]))
  while (randomProductIndex1 === randomProductIndex2) {
    randomProductIndex2 = getRandomProductIndex();
  }
  while (randomProductIndex2 === randomProductIndex3 ||
     randomProductIndex1 === randomProductIndex3) {
    randomProductIndex3 = getRandomProductIndex();
  }

  // lastImages[0] = (products[randomProductIndex1]);
  // lastImages[1] = (products[randomProductIndex2]);
  // lastImages[2] = (products[randomProductIndex3]);

  image1Element.src = products[randomProductIndex1].src;
  image1Element.alt = products[randomProductIndex1].name;
  image2Element.src = products[randomProductIndex2].src;
  image2Element.alt = products[randomProductIndex2].name;
  image3Element.src = products[randomProductIndex3].src;
  image3Element.alt = products[randomProductIndex3].name;
  products[randomProductIndex1].timesSeen++;   // Increment the timesSeen property for each displayed product.
  products[randomProductIndex2].timesSeen++;
  products[randomProductIndex3].timesSeen++;
}

function handleProductClicks(event) {
  if (event.target === productContainer) {
    alert('Please click on a Product');
    return;
  }
  if (rounds > 0) {
  // add 1 to the pridunt in the array that twas clicked on
    for (let i = 0; i < products.length; i++) {
      if (products[i].name === event.target.alt) {
        products[i].timesClicked++;
        clicks++;
        rounds--;
        break;
      }
    }
    if (clicks === maxClicksAllowed) {
      productContainer.removeEventListener('click', handleProductClicks);
      productContainer.className = 'no-voting';
      alert('Max Votes reached!  Please click "View Results"');
      // renderChart();
    } else {
      displayRandomProducts();
      save();
    }
  }
}

//     console.log(products);
//     // add 3 new images once clicked
//     displayRandomProducts();
//     rounds--;
//   } else {
//     alert('No more votes.');
//     productContainer.removeEventListener('click', handleProductClicks);
//   }
// }


function getRandomProductIndex() {
  return Math.floor(Math.random() * products.length);
}

// function renderResults() {
//   let ul = document.querySelector('ul');
//   let lis = document.querySelectorAll('li');
//   if (lis.length) {
//     console.log('WE ALREADY HAVE A LIST!!!');
//     // we know there are list items on the page.

//     // update the existing lis.
//   }
//   for (let i = 0; i < products.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${products[i].name} had ${products[i].timesSeen} view(s) and was clicked ${products[i].timesClicked} time(s).`;
//     ul.appendChild(li);
//   }
// }

resultButton.addEventListener('click', () => {
  // renderResults();
  renderChart();
});
// resultButton.addEventListener('click', renderResults);
productContainer.addEventListener('click', handleProductClicks);

function renderChart() {
  let productNames = [];
  let productLikes = [];
  let productViews = [];

  for (let i = 0; i < products.length; i++) {
    productNames.push(products[i].name);
    productLikes.push(products[i].timesClicked);
    productViews.push(products[i].timesSeen);
  }
  console.log(productNames, productLikes, productViews);
  return new Chart(canvasChart, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Views',
        data: productViews,
        borderWidth: 1
      }, {
        label: 'Likes',
        data: productLikes,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function save() {
  let valuesToStore = JSON.stringify(products);
  localStorage.setItem('chartData', valuesToStore);
  console.log(localStorage.chartData);
}

function load() {
  let rawData = localStorage.getItem('chartData');
  let chartObject = JSON.parse(rawData);
  // if we need Contructor functionality -> loop and recreate our Goat Objects;
  if (!chartObject) {
    return [
      new Product('bag', 'img/bag.jpg'),
      new Product('banana', 'img/banana.jpg'),
      new Product('bathroom', 'img/bathroom.jpg'),
      new Product('boots', 'img/boots.jpg'),
      new Product('breakfast', 'img/breakfast.jpg'),
      new Product('bubblegum', 'img/bubblegum.jpg'),
      new Product('chair', 'img/chair.jpg'),
      new Product('cthulhu', 'img/cthulhu.jpg'),
      new Product('dog-duck', 'img/dog-duck.jpg'),
      new Product('dragon', 'img/dragon.jpg'),
      new Product('pen', 'img/pen.jpg'),
      new Product('pet-sweep', 'img/pet-sweep.jpg'),
      new Product('scissors', 'img/scissors.jpg'),
      new Product('shark', 'img/shark.jpg'),
      new Product('sweep', 'img/sweep.png'),
      new Product('tauntaun', 'img/tauntaun.jpg'),
      new Product('unicorn', 'img/unicorn.jpg'),
      new Product('water can', 'img/water-can.jpg'),
      new Product('wine-glass', 'img/wine-glass.jpg'),
    ];
  } else {
    console.log('RECREATE PRODUCTS');

    // loops through chartObject, for each goat in chartObject create a new Goat
  }
  return chartObject;
}


