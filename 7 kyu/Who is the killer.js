//https://www.codewars.com/kata/who-is-the-killer-1

/*
Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:

['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
 */

function killer(suspectInfo, dead) {
  let killerName = "",
    maxDead = 0;
  for (let [key, value] of Object.entries(suspectInfo)) {
    let count = 0;
    dead.forEach((item) => {
      if (value.includes(item)) count++;
    });
    if (count > maxDead) {
      maxDead = count;
      killerName = key;
    }
  }
  return killerName;
}

killer(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
); //"James!"

killer({ Brad: [], Megan: ["Ben", "Kevin"], Finn: [] }, ["Ben"]); // "The killer is Megan!"

//Best solution

function killer(suspectInfo, dead) {
  for (let name in suspectInfo) {
    if (dead.every((deadPerson) => suspectInfo[name].includes(deadPerson))) {
      return name;
    }
  }
}
