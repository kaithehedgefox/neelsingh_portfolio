"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Neel Singh
   Date: 4-24-19  
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;

var cartHTML = "<table>" +
"<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

//window.alert(tableHTML);
for (var i = 0; i < item.length; i++){
 //add a row to the table
 //using data from the arrays   
    
var itemCost = itemPrice*itemQty;
 
    
 cartHTML += "<tr> <td>" + <img src='tc_item.png' alt='item' />[i] + "</td><td>" + itemDescription[i] + "</td><td>" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td><td>" + itemCost[i] +
"</td></tr>";

    
}

//add the closing tag for table
tableHTML += "<tr><td colspan='4'>" + Subtotal + "</td><td>" + total[orderTotal] "</td></tr>" + "</table>";

//display the data in the div element
document.getElementById("cart").innerHTML = cartHTML;
