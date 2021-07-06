function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function greeting(age) {
  if (isAdult(age) == true) {
    return "Hello There";
  } else {
    return "Hey kiddo";
  }
}

console.log(greeting(16));
