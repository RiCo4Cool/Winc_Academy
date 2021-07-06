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
