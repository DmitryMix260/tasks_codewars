// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/solutions/javascript

function solution(str, ending) {
  return str.endsWith(ending);
}

solution("samurai", "ai"); // true
solution("sumo", "omo"); // false
solution("ninja", "ja"); // true
solution("sensei", "i"); // true
