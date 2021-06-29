// Good Luck! You got this 💪🏾
// Write your code here.

var bill = prompt("Enter bill amount ?");

var tip;

if (bill >= 50 && bill <= 300) {
  tip = bill * 0.15;
  console.log("tip for 15%", tip);
} else {
  tip = bill * 0.2;
  console.log("tip for 20%", tip);
}

var total = bill + tip;

console.log(`the bill was ${bill} , the tip ${tip}, and the value is ${total}`);
