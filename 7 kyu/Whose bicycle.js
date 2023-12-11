// https://www.codewars.com/kata/5a2cb4bff28b820c33000082

/* I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you. */

function whoseBicycle(diary1, diary2, diary3) {
  let childrensFinalGrades = [];
  let arg = [...arguments];

  function sum(obj) {
    let finalGrade = 0;
    for (let key in obj) {
      finalGrade += obj[key];
    }
    childrensFinalGrades.push(finalGrade);
  }
  arg.map((item) => {
    sum(item);
  });

  switch (childrensFinalGrades.lastIndexOf(Math.max(...childrensFinalGrades))) {
    case 0:
      return "I need to buy a bicycle for my first son.";
    case 1:
      return "I need to buy a bicycle for my second son.";
    case 2:
      return "I need to buy a bicycle for my third son";
  }
}

whoseBicycle(
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 8,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 6,
    history: 5,
    physics: 5,
    geography: 9,
    chemistry: 10,
  }
); //    "I need to buy a bicycle for my second son."

whoseBicycle(
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  }
); //"I need to buy a bicycle for my third son."

whoseBicycle(
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 5,
  },
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  },
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
  }
); //    "I need to buy a bicycle for my third son."

whoseBicycle(
  {
    algebra: 3,
    history: 7,
    physics: 8,
    geography: 4,
    chemistry: 10,
  },
  {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 4,
  },
  {
    algebra: 9,
    history: 7,
    physics: 9,
    geography: 9,
    chemistry: 10,
  }
); //    "I need to buy a bicycle for my third son."
