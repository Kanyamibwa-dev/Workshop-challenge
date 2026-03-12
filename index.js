// Challenge 1: Bus Fare Eligibility

let ticketPrice = 500;
let balance = 1000;
let age = 15;

let remainingBalance = balance - ticketPrice ;
console.log(" Remaining balance:", remainingBalance);

let enoughMoney = balance >= ticketPrice;
console.log("enoughMoney" , enoughMoney);

let correctAge = age > 12;
console.log("Age allowed" , correctAge) ;

let canBoard = enoughMoney && correctAge ;
console.log(" can board" , canBoard);

