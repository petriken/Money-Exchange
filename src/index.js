// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let a = currency;
    let obj = {};
if( a <= 0 ) {
  return {};
  }
else if( a > 10000 ) {
obj.error = "You are rich, my friend! We don\'t have so much coins for exchange";
}
else {
const h = Math.floor(a/50);
  if(h!=0){obj.H = h;}
let x = a % 50;
const q = Math.floor(x/25);
   if(q!=0){obj.Q = q;} 
let y = x % 25;
const d = Math.floor(y/10);
   if(d!=0){obj.D = d;} 
let z = y % 10;
const n = Math.floor(z/5);
   if(n!=0){obj.N = n;} 
let x1 = z % 5;
const p = Math.floor(x1/1);
   if(p!=0){obj.P = p;} 
let x2 = x1 % 1;
}
return obj;
}