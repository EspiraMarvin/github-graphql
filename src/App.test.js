import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 Github Issue Tracker', () => {
  render(<App />);
  const h1 = screen.getByText(/Github Issue Tracker/);
  expect(h1).toBeInTheDocument();
});
