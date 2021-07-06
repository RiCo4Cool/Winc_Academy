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

/* vat exercise 1 */
function vat(baseprice, vatpercentage) {
  const vat = baseprice * (vatpercentage / 100);
  return vat;
}

function priceIncludingVat(baseprice, vatpercentage) {
  return baseprice + vat(baseprice, vatpercentage);
}

console.log(priceIncludingVat(1000, 21));

/* vat exercise 2 */
function vat2(priceIncludingVat, vatpercentage) {
  return priceIncludingVat / (vatpercentage / 100 + 1);
}

function basePrice(priceIncludingVat, vatpercentage) {
  return [vat2(priceIncludingVat, vatpercentage), vatpercentage];
}

console.log(basePrice(2.18, 9));
