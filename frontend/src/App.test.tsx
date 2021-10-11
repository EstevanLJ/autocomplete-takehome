import { render, screen } from '@testing-library/react';
import App from './App';

test('renders autocomplete input', () => {
  render(<App />);
  const inputElement = screen.getByTestId('autocomplete-input');
  expect(inputElement).toBeInTheDocument();
});

