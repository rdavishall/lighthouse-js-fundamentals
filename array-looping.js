const amounts = [61.00, 52.25, 112.99, 5.00];

//for loop
/*let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ' + total);*/

//for of loop
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ' + total);