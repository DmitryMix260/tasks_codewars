// https://www.codewars.com/kata/string-repeat

function repeatStr(n, s) {
  let element = "";
  for (let i = 0; i < n; i++) {
    element += s;
  }
  console.log(element);
}

repeatStr(3, "*"); // "***"
repeatStr(5, "#"); // "#####"
repeatStr(2, "ha "); // "ha ha "
