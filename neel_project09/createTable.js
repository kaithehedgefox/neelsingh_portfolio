"use strict";

//create arrays for the data
var items=["pizza", "popcorn", "drink", "salad"];
var prices = [3.50, 1.25, 1.00, 1.50];

//create beginning of table with header row
var tableHTML = "<table id='itemTable'>" +
 "<caption>Menu Items</caption>" +
 "<tr><th>Item</th><th>Price</th></tr>";

//window.alert(tableHTML);
for (var i = 0; i < items.length; i++){
 //add a row to the table
 //using data from the arrays
 tableHTML += "<tr> <td>" + items[i] + "</td><td>" + prices[i] +
"</td></tr>";
}

//add the closing tag for table
tableHTML += "</table>";

//display the data in the div element
document.getElementById("itemList").innerHTML = tableHTML;