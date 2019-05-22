"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script
   
   Author: Neel Singh
   Date: 5-9-19  
   
   Filename: co_cart.js
   
   Function List
   =============
   
   calcCart()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/ 

window.addEventListener("load", function() {
    var memberForm = document.forms.memberForm;
    memberForm.elements.orderDate.value = new Date().toDateString();
    memberForm.elements.model.focus();
    
    // Calculate the cost of the order
    calcCart();

    // Event handlers for the web form
    memberForm.elements.model.onchange = calcCart;
    memberForm.elements.qty.onchange = calcCart;
    
    var planOptions = document.querySelectorAll('input[name="protection"]');
    for (var i = 0; i < planOptions.length; i++) {
        planOptions[i].onclick = calcCart;
    }
    
});

function calcCart() {
    var orderForm = document.forms.orderForm;
    
    // orderCost = model cost x quantity
    var orderCost = modelCost*modelQty;
    memberForm.elements.orderCost.value = formatUSCurrency(orderCost);
    
    var shipCost = document.querySelector('input[name="shipping"]').value;
    memberForm.elements.shippingCost.value = formatNumber(shippingCost);
    
    memberForm.elements.subTotal.value = formatNumber(orderCost + shipCost);
    
    // Calculate the sales tax
    var salesTax = 0.05*(orderCost + shipCost);
    memberForm.elements.salesTax.value = formatNumber(salesTax, 2);
    
    var cartTotal = orderCost + shipCost + salesTax;
    memberForm.elements.cartTotal.value = formatUSCurrency(cartTotal);
    
    // Store the order details
    memberForm.elements.ModelName.value =
        memberForm.elements.model.options[mIndex].text;
    memberForm.elements.ModelCost.value =
        document.querySelector('input[name="protection"]').nextSibling.nodeValue
    
}







function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
