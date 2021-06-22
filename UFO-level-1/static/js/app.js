// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(UFOReport) {
   console.log(UFOReport);
});

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(UFOReport) {
console.log(UFOReport);
var row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(UFOReport) {
console.log(UFOReport);
var row = tbody.append("tr");

 Object.entries(UFOReport).forEach(function([key, value]) {
     console.log(key, value);
});
});

/*// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(UFOReport) {
console.log(UFOReport);
var row = tbody.append("tr");

Object.entries(UFOReport).forEach(function([key, value]) {
console.log(key, value);
// Append a cell to the row for each value
// in the weather report object
var cell = row.append("td");
});
});*/

// // Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function(UFOReport) {
console.log(UFOReport);
var row = tbody.append("tr");
Object.entries(UFOReport).forEach(function([key, value]) {
console.log(key, value);
//Append a cell to the row for each value in the weather report object
var cell = row.append("td");
cell.text(value);
});
});

// BONUS: Refactor to use Arrow Functions!
data.forEach((UFOReport) => {
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// from data.js
var tableData = data;

// YOUR CODE HERE!
// Assign the data from `data.js` to a descriptive variable
var UFO_sighting = data;

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(UFO_sighting);

  var filteredData = UFO_sighting.filter(UFO => UFO.datetime === inputValue);

  console.log(filteredData);

  
};
