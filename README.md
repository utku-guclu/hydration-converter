# Hydration Converter

A utility library for converting between milliliters and cups, with added sarcasm and handling for edge cases.

## Installation

You can install this package via npm:

```
npm install hydration-converter
```
Or using yarn:
```
yarn add hydration-converter
```

## Usage

You can install this package via npm:

```bash
const { mlToCups, cupsToMl } = require('hydration-converter');

// Convert milliliters to cups
console.log(mlToCups(500)); // Output: 2

// Convert cups to milliliters
console.log(cupsToMl(2)); // Output: 473
```

## Functions

`mlToCups(ml)`
Converts milliliters to cups.

- `ml` (number): The volume in milliliters to convert to cups.
- Returns the converted volume in cups.

`cupsToMl(cups)`
- Converts cups to milliliters.

- `cups` (number): The volume in cups to convert to milliliters.
- Returns the converted volume in milliliters.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to write tests for any new functionality and ensure that all existing tests pass before submitting.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/utku-guclu/hydration-converter/blob/main/LICENSE) file for details.
