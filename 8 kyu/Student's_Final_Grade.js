// https://www.codewars.com/kata/students-final-grade

function finalGrade(exam, projects) {
  let result = 0;
  if (exam > 90 || projects > 10) {
    return (result = 100);
  }
  if (exam >= 75 && projects <= 5) {
    return (result = 90);
  }
  if (exam >= 50 && projects <= 2) {
    return (result = 75);
  }
  return result;
}

finalGrade(100, 12); // 100
finalGrade(85, 5); // 90
finalGrade(75, 2); // 90
finalGrade(0, 10); // 100
