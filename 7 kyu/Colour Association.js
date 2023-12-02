// https://www.codewars.com/kata/56d6b7e43e8186c228000637

function colourAssociation(array) {
  console.log(
    array.map(([e, i]) => 
        ({[e]: i})
    )
  );
}

colourAssociation([
  ["white", "goodness"],
  ["blue", "tranquility"],
]); //  [{ white: "goodness" }, { blue: "tranquility" }];
colourAssociation([
  ["red", "energy"],
  ["yellow", "creativity"],
  ["brown", "friendly"],
  ["green", "growth"],
]); // [{ red: "energy" }, { yellow: "creativity" }, { brown: "friendly" }, { green: "growth" },  ]
