import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';
import RootLayout from '../app/layout';

// Mock the children of RootLayout to render the Home component
jest.mock('../app/layout', () => ({ children }) => <div>{children}</div>);

test('renders the Home page with expected content', () => {
  render(
    <RootLayout>
      <Home />
    </RootLayout>
  );

  // Check for text rendered by the Home component
  expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  expect(screen.getByText(/Docs/i)).toBeInTheDocument();

}); 