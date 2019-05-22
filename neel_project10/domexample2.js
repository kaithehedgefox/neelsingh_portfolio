"use strict";
window.alert("hello");
//select all the h2 elements in the page
/*
var myCollection = document.getElementsByTagName("h2");
var i;
for (i = 0; i < myCollection.length; i++) {
 myCollection[i].style.color = "red";
}
*/
var headers = document.querySelectorAll("h2");
//window.alert(headers.length);

//make an ol of all the h2 elements
var olist = document.createElement("ol");
for (var i = 0; i < headers.length; i++){
 //change colors
 //window.alert(headers[i].innerHTML);
 //headers[i].style.color = "red";
 //make li
 var item = document.createElement("li");
 item.innerHTML = headers[i].innerHTML;
 olist.appendChild(item);//olist.appendChile(document.createElement)
 }

//put olist on the document
document.getElementById("hlist").appendChild(olist);