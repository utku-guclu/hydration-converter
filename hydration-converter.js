// Convert milliliters to cups
function mlToCups(ml) {
  if (ml === undefined || ml === null || isNaN(ml)) {
    throw new Error(
      "Invalid input. Please provide a valid number of milliliters."
    );
  }
  // Adding some sarcasm here
  if (ml <= 0) {
    return "You want to convert zero or negative milliliters? What a brilliant idea!";
  }
  return Math.round(ml / 236.588);
}

// Convert cups to milliliters
function cupsToMl(cups) {
  if (cups === undefined || cups === null || isNaN(cups)) {
    throw new Error("Invalid input. Please provide a valid number of cups.");
  }
  // More sarcasm here
  if (cups <= 0) {
    return "Converting zero or negative cups? You must be a real optimist!";
  }
  return Math.round(cups * 236.588);
}

module.exports = { mlToCups, cupsToMl };
