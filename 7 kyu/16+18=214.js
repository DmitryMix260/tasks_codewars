// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

function add(num1, num2) {
  num1 = ("" + num1).split("").reverse();
  num2 = ("" + num2).split("").reverse();
  let numMax = Math.max(num1.length, num2.length);
  let result = [];
  for (let i = 0; i < numMax; i++) {
   result.push((+num1[i] || 0) + (+num2[i] || 0));
  }
  console.log(result.reverse().join(''));
}

add(2, 11); // 13
add(0, 1); // 1
add(0, 0); // 0
add(16, 18); // 214
add(26, 39); // 515
add(122, 81); // 1103
add(1222, 30277); // 31499
add(1236, 30977); // 31111013
add(38810, 1383); // 391193
add(49999, 49999); // 818181818
