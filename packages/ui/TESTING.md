# Testing Guide

This package uses Jest and React Testing Library for testing React components.

## Running Tests

### From the UI package directory:
```bash
npm test
```

### From the root directory:
```bash
npm test
```

### Watch mode (for development):
```bash
npm run test:watch
```

### Coverage report:
```bash
npm run test:coverage
```

## Test Structure

Tests are located in `src/__tests__/` directory and follow the naming convention:
- `*.test.tsx` for component tests
- `*.spec.tsx` for specification tests

## Testing Patterns Used

### 1. Component Rendering Tests
- Test that components render with correct content
- Verify that props are applied correctly
- Check for proper HTML semantics

### 2. User Interaction Tests
- Test click handlers and user events
- Verify that callbacks are called with correct parameters
- Test state changes after user interactions

### 3. Props and Styling Tests
- Test that className props are applied
- Verify that custom styling works correctly
- Test different prop combinations

### 4. Accessibility Tests
- Test that components have proper ARIA roles
- Verify keyboard navigation
- Check for proper semantic HTML elements

### 5. Mocking Tests
- Mock global functions like `alert`
- Test external dependencies
- Verify that mocks are called correctly

## Example Test Structure

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName } from '../component-name';

describe('ComponentName', () => {
  beforeEach(() => {
    // Setup before each test
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    const mockHandler = jest.fn();
    render(<ComponentName onClick={mockHandler} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockHandler).toHaveBeenCalled();
  });
});
```

## Best Practices

1. **Use semantic queries**: Prefer `getByRole`, `getByLabelText` over `getByTestId`
2. **Test behavior, not implementation**: Focus on what users see and do
3. **Keep tests simple**: Each test should verify one specific behavior
4. **Use descriptive test names**: Test names should clearly describe what is being tested
5. **Mock external dependencies**: Don't test third-party libraries, mock them instead

## Coverage

The test suite aims for high coverage of:
- Component rendering
- User interactions
- Props handling
- Error states
- Edge cases

Run `npm run test:coverage` to see detailed coverage reports. 