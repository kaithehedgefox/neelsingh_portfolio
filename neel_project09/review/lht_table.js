"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Neel Singh
   Date:  4-22-19  

	
*/

/* Set the date displayed in the calendar */
var thisDay = new Date("August 30, 2018");

/* Function to generate the calendar table */
var tableHTML = "<table id='eventTable'>" +
"<caption>Upcoming Events</caption>" +
"<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

//window.alert(tableHTML);
for (var i = 0; i < eventDates.length; i++){
 //add a row to the table
 //using data from the arrays
    
    var eventDate = new Date(eventDates[i]);
    
    var eventDay = eventDate.toDateString();
    
    var eventTime = eventDate.toLocaleTimeString();
    
 tableHTML += "<tr> <td>" + eventDates[i] + "</td><td>" + eventDescriptions[i] + "</td><td>" + eventPrices[i] +
"</td></tr>";
    
    
    if ((thisDay <= eventDate) && (eventDate <= endDate)) { 
       var tableHTML =  tableHTML + "<tr><td>eventDay @ eventTime</td><td>description</td><td>price</td></tr>";
    }
    
}

//add the closing tag for table
tableHTML += "</table>";

//display the data in the div element
document.getElementById("eventList").innerHTML = tableHTML;
