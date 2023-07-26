'use-strict';

let productContainer = document.querySelector('section');
let resultButton = document.querySelector('section + button');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
let chartCanvas = document.getElementById('myChart');


let clicks = 0;
let maxClicksAllowed = 25;

const products = [];

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.timesClicked = 0;
  this.timesSeen = 0;
  products.push(this);
}

let lastImages = []; // some state for the previously rendered product images.
function getRandomNum() {
  // const random =
  return Math.floor(Math.random() * products.length);

  // if (lastImages.includes(random)) {
  //   return getRandomNum();
  // }
  // lastImages.push(random);

  // if (lastImages.length > 3) {
  //   lastImages = [];
  // }

  // return random;
}

function renderProducts() {
  let product1 = getRandomNum();
  let product2 = getRandomNum();
  let product3 = getRandomNum();
  while ((product1 === product2 || product1 === product3)) {
    product1 = getRandomNum();
  }
  while ((product2 === product3 || product2 === product1)) {
    product2 = getRandomNum();
  }
  // let uniqueImages = [];

  if (lastImages.length < 3) {
    while(lastImages.includes(product1)) {
      product1 = getRandomNum();
    }
    while(lastImages.includes(product2) || product2 === product1) {
      product2 = getRandomNum();
    }
    while(lastImages.includes(product3) || (product3 === product1 && product3 === product2)) {
      product3 = getRandomNum();
    }
  }

  // lastImages.push(product1);
  // lastImages.push(product2);
  // lastImages.push(product3);


  // while ( uniqueImages.length < 3) {
    // TODO: find new products that aren't in lastImages, and are all unique to themselves
  // console.log('unique Images Found!!');
  // while ((product1 === product2 || product1 === product3)) {
  //   product1 = getRandomNum();
  // }
  // while ((product2 === product3 || product2 === product1)) {
  //   product2 = getRandomNum();
  // }
  // }
  lastImages[0] = product1;
  lastImages[1] = product2;
  lastImages[2] = product3;

  image1.src = products[product1].src;
  image2.src = products[product2].src;
  image3.src = products[product3].src;

  image1.alt = products[product1].name;
  image2.alt = products[product2].name;
  image3.alt = products[product3].name;

  products[product1].timesSeen++;
  products[product2].timesSeen++;
  products[product3].timesSeen++;
}

// stuff happens when we click!
function handleProductClick(event) {
  if (event.target === productContainer) {
    alert('Please click on an image');
  }
  // total clicks gets 1 added to it.
  clicks++;
  let clickProduct = event.target.alt; // the name of a product

  // find the product that was clicked from our array, increment times clicked.
  for (let i = 0; i < products.length; i++) {
    if (clickProduct === products[i].name) {
      products[i].timesClicked++;
      break;
    }
  }

  // if user has met max clicks, we add event listeners, render the chart
  if (clicks === maxClicksAllowed) {
    productContainer.removeEventListener('click', handleProductClick);
    resultButton.addEventListener('click', renderResults);
    // resultButton.className = 'clicks-allowed';
    // productContainer.className = 'no-voting';
    // renderChart();
  } else {
    renderProducts();
  }
}

// create the list items with text (not the chart)
function renderResults() {
  // let ul = document.querySelector('ul');
  for (let i = 0; i < products.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${products[i].name} had ${products[i].timesSeen} views and was clicked ${products[i].timesClicked} times.`;
    // ul.appendChild(li);
  }
}

let chartObj = null;
resultButton.addEventListener('click', function() {
  // chartObj.destroy();
  chartObj = renderChart();
  // chartObj.data.datasets[0].data[0] = 10;
  console.log('OUR CHART OBJECT: ', chartObj.data);
  // chartObj.update();
});


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
  return new Chart(chartCanvas, {
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
  // return new Chart(chartCanvas, {
  //   labels: productNames,
  //   datasets: [{
  //     label: 'Likes',
  //     data: productLikes,
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgb(255, 99, 132)'
  //     ],
  //     borderWidth: 1
  //   },
  //   {
  //     label: 'Views',
  //     data: productViews,
  //     backgroundColor: [
  //       'rgba(255, 159, 64, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgb(255, 159, 64)'
  //     ],
  //     borderWidth: 1
  //   }]
  // });
}


new Product('banana', './images/banana.jpg');
new Product('bathroom', './images/bathroom.jpg');
new Product('boots', './images/boots.jpg');
new Product('breakfast', './images/breakfast.jpg');
new Product('bubblegum', './images/bubblegum.jpg');
new Product('chair', './images/chair.jpg');
new Product('cthulhu', './images/cthulhu.jpg');
new Product('dog-duck', './images/dog-duck.jpg');
new Product('dragon', './images/dragon.jpg');
new Product('pen', './images/pen.jpg');
new Product('pet-sweep', './images/pet-sweep.jpg');
new Product('scissors', './images/scissors.jpg');
new Product('shark', './images/shark.jpg');
new Product('sweep', './images/sweep.png');
new Product('tauntaun', './images/tauntaun.jpg');
new Product('unicorn', './images/unicorn.jpg');
new Product('water-can', './images/water-can.jpg');
new Product('wine-glass', './images/wine-glass.jpg');



renderProducts();

productContainer.addEventListener('click', handleProductClick);
