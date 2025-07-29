import '@testing-library/jest-dom';

// Mock window.alert for tests
global.alert = jest.fn();

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  // Uncomment to ignore a specific log level
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};

// Set up React 19 JSX runtime
global.React = require('react'); 