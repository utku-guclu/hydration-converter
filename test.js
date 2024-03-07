const { mlToCups, cupsToMl } = require('./hydration-converter');

test('Converts milliliters to cups correctly', () => {
  expect(mlToCups(0)).toBe(0);
  expect(mlToCups(236.588)).toBe(1);
});

test('Converts cups to milliliters correctly', () => {
  expect(cupsToMl(0)).toBe(0);
  expect(cupsToMl(1)).toBe(237);
});
