// https://www.codewars.com/kata/combine-objects

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine(...params) {
    let resultObject = {};
    for (let i = 0; i < params.length; i++) {
        for(let key in params[i]){
            if (!resultObject[key]) {
                resultObject[key] = params[i][key];
            } else {
                resultObject[key] += params[i][key];
            }
        }
        
    }
    return resultObject;
}

combine(objA, objB); // { a: 13, b: 20, c: 36, d: 3 });
combine(objA, objC); // { a: 15, b: 20, c: 30, d: 11, e: 8 });
combine(objA, objB, objC); // { a: 18,  b: 20,  c: 36,  d: 14,  e: 8,}
combine(objA, objC, objD); // {a: 15,b: 20,c: 33,d: 11, e: 8,}
