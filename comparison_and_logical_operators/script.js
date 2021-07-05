const age = 19;
const firstName = "Bram";
const totalAmount = 160;

if (age >= 18) {
  console.log("U mag naar binnen!");
} else {
  console.log("Blijf thuis!");
}

const isFemale = false;
if (isFemale == true) {
  console.log("Veel plezier op de ladiesnight!");
} else {
  console.log("Zoek een ander feest!");
}

const driveStatus = "bob";
if (driveStatus == "bob") {
  console.log("U mag rijden!");
} else {
  console.log("Bestel een taxi!");
}

if (age > 18 && age < 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Je hoeft maar 100% te betalen!");
}

if (firstName === "Sarah" || firstName === "Bram") {
  console.log("Haal snel je gratis biertje!");
} else {
  console.log("Vergeet niet je biertje te betalen!");
}

if (totalAmount > 25 && totalAmount <= 50) {
  console.log("Haal je gratis bitterballen!");
} else if (totalAmount > 50 && totalAmount <= 100) {
  console.log("Haal je gratis porties nachos!");
} else if (totalAmount > 100) {
  console.log("Haal je gratis flesje champagne!");
}
