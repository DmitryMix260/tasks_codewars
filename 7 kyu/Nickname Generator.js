// https://www.codewars.com/kata/nickname-generator

/*
Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.
*/

function nicknameGenerator(name) {
  if (name.length <= 3) console.log("Error: Name too short");
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(name[2])) {
    console.log(name.slice(0, 4));
  } else {
    console.log(name.slice(0, 3));
  }
}

nicknameGenerator("Jimmy"); // "Jim"
nicknameGenerator("Jeannie"); //=> "Jean"
nicknameGenerator("Samantha"); // "Sam"
nicknameGenerator("Sam"); // "Error: Name too short"
nicknameGenerator("Kayne"); // "Kay", "'y' is not a vowel"
nicknameGenerator("Melissa"); // "Mel"
nicknameGenerator("James"); // "Jam"
nicknameGenerator("Douglas"); //=> "Doug"
nicknameGenerator("Gregory"); //=> "Greg"
