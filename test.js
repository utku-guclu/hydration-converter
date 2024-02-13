const { mlToCups, cupsToMl } = require('./hydration-converter');

test('Converts milliliters to cups correctly', () => {
  expect(mlToCups(0)).toBe("You want to convert zero or negative milliliters? What a brilliant idea!");
  expect(mlToCups(236.588)).toBe(1);
});

test('Converts cups to milliliters correctly', () => {
  expect(cupsToMl(0)).toBe("Converting zero or negative cups? You must be a real optimist!");
  expect(cupsToMl(1)).toBe(237);
});
