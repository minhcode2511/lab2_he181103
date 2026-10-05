import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the movie app heading without crashing', () => {
  render(<App />);
  expect(screen.getByText(/Mini Movie Manager/i)).toBeInTheDocument();
});
