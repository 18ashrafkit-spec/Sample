# Sample

A sample Node.js project with code coverage setup using Jest.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

## Running Tests

### Run all tests

```bash
npm test
```

### Run tests with code coverage

```bash
npm run test:coverage
```

This will generate a code coverage report showing:
- **Statements coverage**: Percentage of statements executed
- **Branch coverage**: Percentage of conditional branches executed
- **Function coverage**: Percentage of functions called
- **Line coverage**: Percentage of lines executed

### Run tests in watch mode

```bash
npm run test:watch
```

## Code Coverage Reports

After running `npm run test:coverage`, coverage reports are generated in multiple formats:

1. **Console output**: Displayed directly in the terminal
2. **HTML report**: Open `coverage/lcov-report/index.html` in a browser for detailed interactive report
3. **LCOV report**: Located at `coverage/lcov.info` for use with CI/CD tools

### Coverage Thresholds

The project is configured with the following minimum coverage thresholds:
- Branches: 80%
- Functions: 80%
- Lines: 80%
- Statements: 80%

Tests will fail if coverage falls below these thresholds.

## Project Structure

```
Sample/
├── src/              # Source code
│   ├── calculator.js # Calculator utility functions
│   └── utils.js      # General utility functions
├── tests/            # Test files
│   ├── calculator.test.js
│   └── utils.test.js
├── coverage/         # Coverage reports (auto-generated)
└── package.json      # Project configuration
```

## Current Code Coverage

The project currently maintains **100% code coverage** across all metrics:
- Statements: 100%
- Branches: 100%
- Functions: 100%
- Lines: 100%

