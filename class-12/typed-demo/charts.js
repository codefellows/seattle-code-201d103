'use strict';

const chartCanvas = document.getElementById('myChart');
const chartButton = document.getElementById('view-results');
console.log(goats);
let chartObj = null;

chartButton.addEventListener('click', function() {
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
          suggestedMax: 10
        }
      }
    }
  });
}

// this constructor comes from chart.js, the constructor creates our chart, and gives us an object we can use to update.
// new Chart(chartCanvas, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Banana', 'Orange', 'large'],
//     datasets: [{
//       label: 'Times Seen',
//       data: [12, 19, 3, 5, 2, 3, 100],
//       borderWidth: 1
//     }, {
//       label: 'Times Clicked',
//       data: [50, 30, 1 ,49, 39, 3, 15],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
