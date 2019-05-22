"use strict";

//window.alert(“hello”);
function add(){
    
//get the two numbers from the “num1” and “num2” input boxes and store in variables
var n1 = Number(document.getElementById("num1").value);    
var n2 = Number(document.getElementById("num2").value);

//calculate and store the sum
var sum = n1 + n2;  
    
//make sure both boxes have input
if (hasdata(num1) && hasdata(num2) == true){
var n1 = Number(num1.value);

 var n2 = Number(num2.value);

 var sum = n1 + n2;
    
//display the result in the “answer” h2 element    
 document.getElementById("answer").innerHTML = n1 + " + " + n2 + " = " + sum;
}
    
}

function subtract(){
    
//get the two numbers from the “num1” and “num2” input boxes and store in variables
var n1 = Number(document.getElementById("num1").value);    
var n2 = Number(document.getElementById("num2").value);

//calculate and store the difference
var difference = n1 - n2;  
    
//make sure both boxes have input
if (hasdata(num1) && hasdata(num2) == true){
var n1 = Number(num1.value);

 var n2 = Number(num2.value);

 var difference = n1 - n2;
    
//display the result in the “answer” h2 element    
 document.getElementById("answer").innerHTML = n1 + " - " + n2 + " = " + difference;
}
    
}
    
function multiply(){
    
//get the two numbers from the “num1” and “num2” input boxes and store in variables
var n1 = Number(document.getElementById("num1").value);    
var n2 = Number(document.getElementById("num2").value);

//calculate and store the product
var product = n1 * n2;  
    
//make sure both boxes have input
if (hasdata(num1) && hasdata(num2) == true){
var n1 = Number(num1.value);

 var n2 = Number(num2.value);

 var product = n1 * n2;
    
//display the result in the “answer” h2 element    
 document.getElementById("answer").innerHTML = n1 + " x " + n2 + " = " + product;
}
    
}    
    
function divide(){
    
//get the two numbers from the “num1” and “num2” input boxes and store in variables
var n1 = Number(document.getElementById("num1").value);    
var n2 = Number(document.getElementById("num2").value);

//calculate and store the quotient
var quotient = n1 / n2;  
    
//make sure both boxes have input
if (hasdata(num1) && hasdata(num2) == true){
var n1 = Number(num1.value);

 var n2 = Number(num2.value);

 var quotient = n1 / n2;
    
//display the result in the “answer” h2 element    
 document.getElementById("answer").innerHTML = n1 + " ÷ " + n2 + " = " + quotient;
}
    
}   

function hasdata(element){
 //make sure there is data in this element
 if (element.value == ""){
 window.alert("missing input");
 return false;
 }
    
 return true;
}

function reset() {
//clear the elements on the page
 document.getElementById("num1").value = " ";
 document.getElementById("num2").value = " ";
 document.getElementById("answer").innerHTML = " ";
    
}

