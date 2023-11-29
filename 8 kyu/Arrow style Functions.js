// https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript

var ArrowFunc = function (arr) {
  return arr.map((item) => String.fromCharCode(item)).join(""); //Complete this function
};

ArrowFunc([84, 101, 115, 116]), //  "Test",  "Convert those numbers to letters"
  ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]); // "FUS ROH DAH", "Keep it up!"
