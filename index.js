// Challenge 1: Bus Fare Eligibility

let ticketPrice = 500;
let balance = 1000;
let age = 15;

let remainingBalance = balance - ticketPrice ;
console.log(remainingBalance, " Remaining balance:");

let enoughMoney = balance >= ticketPrice;
console.log(enoughMoney, "enoughMoney" );

let correctAge = age > 12;
console.log(correctAge, "Age allowed") ;

let canBoard = enoughMoney && correctAge ;
console.log(canBoard, " can board" );

// challenge 2 : Online Store Discount


let itemPrice = 25;
let quantity = 6;
let isMember = true;

let totalPrice = itemPrice * quantity;
console.log(totalPrice, "total price");

let discountApplies = totalPrice > 100 && isMember;
console.log(discountApplies, "discount Applies");

let discount = totalPrice * 0.10;
console.log(discount, "discount")

let finalPrice = totalPrice - discount ;
console.log(finalPrice , " final price");

