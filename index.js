// Write your solution in this file!

var customerName;
// upperCaseCustomerName(): Write a function that accesses that global customerName variable, and uppercases it. 
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  var bestCustomer = 'not bob';
}
// overwriteBestCustomer(): See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable. 
function overwriteBestCustomer() {
  bestCustomer = 'bob';
}
const leastFavoriteCustomer = 'bob';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'not bob';
}
