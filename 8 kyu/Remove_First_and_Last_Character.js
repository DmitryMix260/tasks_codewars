// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str) {
  console.log(str.slice(1, -1));
}

removeChar("eloquent"); // "loquen"
removeChar("country"); // "ountr"
removeChar("person"); // "erso"
removeChar("place"); // "lac"
removeChar("ooopsss"); // "oopss"
