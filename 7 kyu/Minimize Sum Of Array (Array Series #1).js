//https://www.codewars.com/kata/minimize-sum-of-array-array-series-number-1

/*Task
Given array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:

*/

// My solution
function minSum(arr) {
  let result = null;
  do {
    result += Math.max(...arr) * Math.min(...arr);
    arr.splice(arr.indexOf(Math.max(...arr)), 1);
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
  } while (arr.length !== 0);
  return result;
}

//Best solution

function minSum(arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, arr.length / 2)
    .reduce(
      (acc, curr, index) => (acc += curr * arr[arr.length - index - 1]),
      0
    );
}
