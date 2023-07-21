'use-strict';

// Create a constructor function && prototype function && create instances of each store
function Store(city, minCustomers, maxCustomers, avgCookies) {
  this.city = city;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.customers = this.generateCustomers();
}

Store.prototype.generateCustomers = function (minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
}

const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);


// Global data
const times = ['6:00am:', '7:00am:', '8:00am:', '9:00am:', '10:00am:', '11:00am:', '12:00pm:', '1:00pm:', '2:00pm:', '3:00pm:', '4:00pm:', '5:00pm:', '6:00pm:', '7:00pm:', 'Daily Location Total'];
const locations = [seattle, tokyo, dubai, paris, lima];

// Create and append header elements
function createHeader(arr) {

  let table = document.getElementById('sales-table');
  let thead = document.createElement('thead');
  table.appendChild(thead);
  let tr = document.createElement('tr');
  thead.appendChild(tr);

  for (let i = -1; i < arr.length; i++) {
    if (i === -1) {
      let th = document.createElement('th');
      th.textContent = '';
      tr.appendChild(th);
    } else {
      let th = document.createElement('th');
      th.textContent = arr[i];
      tr.appendChild(th);
    }
  }
}
createHeader(times);


// finding hourly cookies sold per store as well as total && appending them to their respective objects && appending on page
function getSales(arr) {

  let tbody = document.getElementById('sales-table');

  for (let i = 0; i < arr.length; i++) {
    let storeSales = [];
    let storeSalesTotal = 0;
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let j = -1; j < times.length - 1; j++) {
      if (j === -1) {
        let th = document.createElement('th');
        th.textContent = arr[i].city;
        tr.appendChild(th);
        th.setAttribute('class', 'thinBorder');
      } else {
        storeSales.push(Math.floor(arr[i].generateCustomers() * arr[i].avgCookies));
        storeSalesTotal += storeSales[j];
        let td = document.createElement('td');
        td.textContent = storeSales[j];
        tr.appendChild(td);
        td.setAttribute('class', 'thinBorder');
      }
    }
    let td = document.createElement('td');
    td.textContent = storeSalesTotal;
    tr.appendChild(td);
    td.setAttribute('class', 'thinBorder');
    arr[i].amountSoldPerHour = storeSales;
  }

}
getSales(locations);


// Create function to find totals && append (footer)
function getTotals(arr) {
  console.log(arr);
  grandTotal = 0;
  let wholeTable = document.getElementById('sales-table');
  let footer = document.createElement('tfoot');
  footer.setAttribute('id', 'tFoot');
  wholeTable.appendChild(footer);
  let tfoot = document.getElementById('tFoot');
  let th = document.createElement('th');
  th.textContent = 'Total';
  tfoot.appendChild(th);
  th.setAttribute('class', 'thinBorder');

  totals = [];

  for (let i = 0; i < times.length - 1; i++) {
    totalHourSales = 0;
    for (let j = 0; j < arr.length; j++) {
      totalHourSales += arr[j].amountSoldPerHour[i];

    }
    totals.push(totalHourSales);

    let td = document.createElement('td');
    td.textContent = totalHourSales;
    tfoot.appendChild(td);
    td.setAttribute('class', 'thinBorder');

  }
  for (let i = 0; i < totals.length; i++) {
    grandTotal += totals[i];
    console.log(grandTotal);
  }
  let td = document.createElement('td');
  td.textContent = grandTotal;
  tfoot.appendChild(td);
  td.setAttribute('class', 'thinBorder');

}
getTotals(locations);


//adding form and appending created store to table
let formElement = document.getElementById('store-form');

function handleSubmit(event) {
  event.preventDefault();

  let storeName = event.target.storeName.value;
  let storeMinCust = Number(event.target.storeMinCust.value);
  let storeMaxCust = Number(event.target.storeMaxCust.value);
  let storeAvgCust = Number(event.target.storeAvgCookies.value);

  let newStore = new Store(storeName, storeMinCust, storeMaxCust, storeAvgCust);
  locations.push(newStore); // add the new store to our global array of stores.

  getSales([newStore]); // generate new sales values

  totalsRow = document.getElementById('tFoot');
  totalsRow.remove();
  getTotals(locations);
}

formElement = document.addEventListener('submit', handleSubmit);



