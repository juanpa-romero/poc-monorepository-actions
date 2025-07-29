# UI Package

This package contains reusable React components for the monorepo.

## Components

- `Button` - A clickable button component with app name display
- `Card` - A link card component with title and UTM tracking
- `Code` - A code display component

## Testing Setup

This package includes a comprehensive testing setup with Jest and React Testing Library.

### Test Configuration

- **Jest Configuration**: `jest.config.js` - Configured for React 19 and TypeScript
- **Babel Configuration**: `.babelrc` - Set up for JSX and TypeScript transformation
- **Test Setup**: `jest.setup.js` - Global test configuration and mocks

### Test Scripts

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

Tests are located in `src/__tests__/` and follow these patterns:

1. **Component Rendering Tests** - Verify components render correctly
2. **Props Testing** - Test that props are applied correctly
3. **User Interaction Tests** - Test click handlers and events
4. **Accessibility Tests** - Verify proper ARIA roles and semantics
5. **Mocking Tests** - Test external dependencies and global functions

### Example Test Patterns

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button';

describe('Button Component', () => {
  it('renders with children text', () => {
    render(<Button appName="Test App">Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls alert with correct app name when clicked', () => {
    const mockAlert = jest.fn();
    global.alert = mockAlert;
    
    render(<Button appName="My App">Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    
    expect(mockAlert).toHaveBeenCalledWith('Hello from your My App app!');
  });
});
```

### Testing Best Practices

1. **Use semantic queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`
2. **Test behavior, not implementation**: Focus on what users see and do
3. **Keep tests simple**: Each test should verify one specific behavior
4. **Use descriptive test names**: Test names should clearly describe what is being tested
5. **Mock external dependencies**: Don't test third-party libraries, mock them instead

### Dependencies

The testing setup includes:

- **Jest**: Test runner and assertion library
- **React Testing Library**: Component testing utilities
- **Jest DOM**: Custom matchers for DOM testing
- **Babel**: JavaScript/TypeScript transformation
- **JSDOM**: DOM environment for testing

### React 19 Compatibility

**Note**: The current setup may have compatibility issues with React 19 due to changes in how React handles JSX and React elements. The test configuration is set up correctly, but you may need to:

1. Update to newer versions of testing libraries
2. Use different JSX transformation settings
3. Consider using React 18 for testing if React 19 issues persist

### Coverage

The test suite aims for high coverage of:
- Component rendering
- User interactions
- Props handling
- Error states
- Edge cases

Run `npm run test:coverage` to see detailed coverage reports.

## Development

### Adding New Components

1. Create the component in `src/`
2. Add tests in `src/__tests__/`
3. Export from the package
4. Update documentation

### Running Tests

```bash
# From the UI package directory
npm test

# From the root directory
npm test

# Run specific test file
npm test -- --testPathPattern=button.test.tsx
```

## Documentation

See `TESTING.md` for detailed testing documentation and examples. 