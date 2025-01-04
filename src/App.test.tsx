import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App main component with test id', () => {
  render(<App />);
  const mainApp = screen.getByTestId('app-main');
  expect(mainApp).toBeDefined()
});
