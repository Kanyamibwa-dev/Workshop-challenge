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


// Challenge 5 : Cinema Ticket Price


let adultPrice = 10;
let childPrice = 5;

let adultTickets = 3;
let childTickets = 4;

let weekend = true;
 
let totalCost = (adultTickets * adultPrice) + (childTickets * childPrice);
console.log(totalCost);

let dicountApplies = totalPrice > 5 && weekend;
console.log(discountApplies)

// Challenge 6: Gym Access System

let activeMember = true;
let memberAge = 18 ;
let currentCapacity = 40;
let maxCapacity = 50;

let canEnter = activeMember && memberAge >= 16 && currentCapacity < maxCapacity;
console.log(canEnter);

// Challenge 7: Internet Data Usage

let monthlyLimit = 50;
let daUsage = 70;
let isPremium = false;
let remainingData = monthlyLimit - daUsage;
console.log(remainingData + "GB");

let speedReduced = daUsage > monthlyLimit && !isPremium;
console.log(speedReduced);

// Challenge 8: Game Level Unlock System

let userScore = 2000;
let lives = 4;
let coins = 50;

let playerQuailfied = userScore >= 1000 && lives > 0 && coins >=50 ;
console.log(playerQuailfied , "the player is qualified");

// Challenge 9: Food Delivery Fee Calculator

let baseDeliveryFee = 2000;
let order = 5;
let userPremium = true;
let orderAmount = baseDeliveryFee * order;
console.log(orderAmount);
let feeDerivery = orderAmount > 15000 || userPremium ;
console.log(feeDerivery, "free delivery applies");



