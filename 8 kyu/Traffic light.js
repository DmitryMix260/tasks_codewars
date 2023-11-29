// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
  }
}

updateLight("green"); // "yellow"
updateLight("yellow"); // "red"
updateLight("red"); // "green"
