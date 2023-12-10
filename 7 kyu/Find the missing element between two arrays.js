// https://www.codewars.com/kata/find-the-missing-element-between-two-arrays

function findMissing(arr1, arr2) {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  let result;
  for (let i = 0; i < arr1.length; i++) {
   if (arr1[i] !== arr2[i]) return result = arr1[i] 
    
  }
}


  findMissing([1, 2, 3], [1, 3]) // 2
  findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) // 8
  findMissing([7], []) // 7
  findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]) // 3
  findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]) // 0