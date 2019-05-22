"use strict";

//window.alert(“hello”);
function far to cel(){
    
//get the two numbers from the “num1” and “num2” input boxes and store in variables
var n1 = Number(document.getElementById("num1").value);    

//calculate and store the sum
var cel = (n1 – 32) * 5/9;  
    
//make sure both boxes have input
if (hasdata(num1) == true){
var n1 = Number(num1.value);

 var cel = (n1 – 32) * 5/9;
    
//display the result in the “answer” h2 element    
 document.getElementById("num2").value = cel;
}
    
}

function cel to far(){
    
//get the two numbers from the “num1” and “num2” input boxes and store in variables
var n2 = Number(document.getElementById("num2").value);    

//calculate and store the sum
var far = n2 * (9/5) + 32;  
    
//make sure both boxes have input
if (hasdata(num2) == true){
var n2 = Number(num2.value);

 var far = n2 * (9/5) + 32;
    
//display the result in the “answer” h2 element    
 document.getElementById("num1").value = far;
}
    
}


function reset() {
//clear the elements on the page
 document.getElementById("num1").value = " ";
 document.getElementById("num2").value = " ";
 document.getElementById("answer").innerHTML = " ";
    
}


