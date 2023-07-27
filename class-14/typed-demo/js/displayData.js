'use strict';

const chartCanvas = document.getElementById('myChart');
const chartButton = document.getElementById('view-results');
let chartObj = null; // null is falsey!! Which can be nice sometimes

chartButton.addEventListener('click', function () {
  chartObj = createGoatChart();
  chartObj.data.datasets[0].data[0] = 10;
  console.log(chartObj);
  chartObj.update();
});

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
