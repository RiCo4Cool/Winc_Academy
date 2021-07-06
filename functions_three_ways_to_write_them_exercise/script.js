function declaration(numberOne, numberTwo) {
  const numberOneSq = numberOne * numberOne;
  const numberTwoSq = numberTwo * numberTwo;
  const addedSqNums = numberOneSq + numberTwoSq;
  const sqAddedSqNums = addedSqNums * addedSqNums;
  return sqAddedSqNums;
}

console.log(declaration(4, 8));
