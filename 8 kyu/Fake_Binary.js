//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x) {
  let result;
  for (let index = 0; index < x.length; index++) {
    if (+x[index] < 5) {
      result += "0";
    } else {
      result += "1";
    }
  }
  console.log(result);
}

fakeBin("45385593107843568"); // "01011110001100111";
fakeBin("509321967506747"); // "101000111101101";
fakeBin("366058562030849490134388085"); // "011011110000101010000011011";
