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

// challenge 3 : Student Pass/ Fail system 

let score = 90;
let attendance = 80;

let pass = score >= 50 && attendance >= 75;
console.log(pass, "student pass");

let distinction = score >= 85 && pass ;
console.log(distinction , " Student gets distinction");

// Challenge 4 : Phone Battery Warning


let battery = 50;
let usage = 15;
let chargerConnected = false;

let newBattery = battery - usage ;
console.log(newBattery + " % ", "New Battery level:");

let warning = newBattery < 20 || !chargerConnected;
console.log(warning, "Warning needed:")

