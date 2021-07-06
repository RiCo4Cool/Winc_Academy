const bigNumber = function (number) {
  if (number > 100) {
    return true;
  } else {
    return false;
  }
};

console.log(bigNumber(99));
// This is a function that produces something

const bouncer = function (maxNum, curNum, age) {
  if (curNum >= maxNum) {
    return "it's too busy now, come back later";
  }
  if (curNum < maxNum) {
    if (age < 18) {
      return "this is a club for adults";
    } else {
      return "come in";
    }
  }
};

console.log(bouncer(70, 50, 22));
// this is a function that does something

const calculateAverage = function (
  numberOne,
  numberTwo,
  numberThree,
  numberFour,
  numberFive
) {
  return Math.round(
    (numberOne + numberTwo + numberThree + numberFour + numberFive) / 5
  );
};

console.log(calculateAverage(5, 2, 3, 4, 5));
// this function produces something
