'use strict';

const storeValues = [];
const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const storehours

// create our Cookie Stand constructor
function Store(name, minCust, maxCust, avgSale) {
  // define our store properties
  this.name = name;
  this.minCustomers = minCust;
  this.maxCustomers = maxCust;
  this.averageCookiesPerCustomer = avgSale;
  this.dailyTotal = 0;
  this.sales = []; // array for cookies sales
  storeValues.push(this);
}

Store.prototype.hours = storeHours;
// generate a random amount of customers per hour
Store.prototype.generateCustomers = function () {
  // generate a random number within min and max
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
}
Store.prototype.generateSales = function() {
  let total = 0;
  for (let i = 0; i < this.hours.length; i++) {
    // run generate customers
    let randomCustomers = this.generateCustomers();

    // multiply by average sales
    let salesValue = Math.floor(randomCustomers * this.averageCookiesPerCustomer);

    // add to the total
    total += salesValue;

    // push value into sales array
    this.sales.push(salesValue);
  }
  this.dailyTotal = total;
}
Store.prototype.displayTable = function (banana) {
  let tableBody = document.getElementById('store-sales');

  // create a row in an HTML table for a single store
  // create 1 tr for all store data
  let storeRow = document.createElement('tr');

  // add 1 td with the store name
  let storeNameCell = document.createElement('th');
  storeNameCell.textContent = this.name;
  storeRow.appendChild(storeNameCell);

  // add a td for each data point in the sales array
  for (let i =0; i < this.sales.length; i++) {
    let salesCell = document.createElement('td');
    salesCell.textContent = this.sales[i];
    storeRow.appendChild(salesCell);
  }

  // add 1 more td for the daily total
  let totalCell = document.createElement('td');
  totalCell.textContent = this.dailyTotal;
  storeRow.appendChild(totalCell);

  // append the entire row to the body
  tableBody.appendChild(storeRow);
}

new Store('Seattle', 23, 65, 6.3);
new Store('Lima', 2, 16, 4.6);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
// console.log(storeValues);

for (let i = 0; i < storeValues.length; i++) {
  let store = storeValues[i];
  store.generateSales();
  store.displayTable();
}
console.log(storeValues);
generateFooter();

// functions for creating our table footer
//   loops through our store hours, and all stores
//     for each hour we append a new cell to our footer row
//    at the very end we append the daily totals.
function generateFooter() {
  let tableBody = document.getElementById('store-sales');
  let footerRow = document.createElement('tr');

  // add the 'totals" string to the row
  footerRow.appendChild(newCell('Totals', 'th'));

  // outer loop is for each hour
  let grandTotal = 0;
  for (let i = 0; i < storeHours.length; i++) {
    let salesAtHour = 0;

    for(let j = 0; j < storeValues.length; j++) {
      salesAtHour += storeValues[j].sales[i];
    }
    footerRow.appendChild(newCell(salesAtHour));
  }

  // once more just for daily grand totals
  for(let k = 0; k < storeValues.length; k++) {
    grandTotal += storeValues[k].dailyTotal;
  }

  footerRow.appendChild(newCell(grandTotal));
  tableBody.appendChild(footerRow);
}

// we can makes things a little drier with a helper function.
function newCell(newData, element = 'td') {
  let newCell = document.createElement(element);
  newCell.innerHTML = newData;
  return newCell;
}
