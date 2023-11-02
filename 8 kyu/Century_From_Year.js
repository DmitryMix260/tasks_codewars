//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
  console.log(Math.floor((year - 1) / 100 + 1));
}

century(1705); //18
century(1900); // 19
century(1601); //17
century(2000); //20
