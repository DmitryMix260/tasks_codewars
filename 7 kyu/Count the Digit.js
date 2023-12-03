//https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    let arr = ((i*i).toString().split(''));
    arr.forEach((elem) => (elem == d ? result++ : null));
  }
  return result;
}

nbDig(10, 1); // 4, "n = 10, d = 1"
nbDig(25, 1); // 1, "n = 25, d = 1"
nbDig(5750, 0); // 4700, "n = 5750, d = 0"
nbDig(11011, 2); // 9481, "n = 11011, d = 2"
nbDig(12224, 8); // 7733, "n = 12224, d = 8"
nbDig(11549, 1); // 11905, "n = 11549, d = 1"
