// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to 
// your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// from data.js
var tableData = data;

var tBody = d3.select("#tbody");
var submitButton = d3.select("#filter-btn-date");
var dateField = d3.select("#datetime");
// City Button
var cityButton = d3.select("#filter-btn-city");
var cityField = d3.select("#cityname");

// State Button
var stateButton = d3.select("#filter-btn-state");
var stateField = d3.select("#statename");

// Country Button
var countryButton = d3.select("#filter-btn-country");
var countryField = d3.select("#countryname");

// Shape Button
var shapeButton = d3.select("#filter-btn-shape");
var shapeField = d3.select("#shapename")

// Create table 
data.forEach(function (ufoReport) {
    console.log(ufoReport);
    var tRow = tBody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
    // Append a cell to the row for each value in the ufo report object
      var  tData = tRow.append("td");
      tData.text(value);
    });
});

// Function for submit buttons
submitButton.on("click", function() {
    tBody.html("");
    d3.event.preventDefault();
    console.log("Hi, a button was clicked!");
    console.log(d3.event.target);
});

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);
console.log(data);

