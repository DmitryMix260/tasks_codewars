// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

function rentalCarCost(d) {
  if (d >= 7) return d * 40 - 50;
  if (d >= 3) return d * 40 - 20;
  return d * 40;
}

rentalCarCost(2); // 80
rentalCarCost(3); // 100
rentalCarCost(7); // 230
