"use strict";
//window.alert("hello");

//add elements in javascript
//create a h2 element
var h2element = document.createElement("h2");
h2element.innerHTML = "New h2";

//get node from html file
var content = document.getElementById("content");
content.appendChild(h2element);

//add an ol
var listOL = document.createElement("ol");

//append after
content.appendChild(listOL);

//insert before
content.insertBefore(listOL, h2element);

//add OL before the header
var colors = ["red", "green", "blue"];
for (var i = 0; i < colors.length; i++){
 var listElem = document.createElement("li");
 listElem.innerHTML = colors[i];
 listOL.appendChild(listElem);
}
