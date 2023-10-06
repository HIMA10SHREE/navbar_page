import { render, screen } from '@testing-library/react';
import Home from '../pages/About';

test('renders home component', () => {
  render(<Home />);
  const headingElement = screen.getByRole('heading', { name: /home/i });
  expect(headingElement).toBeInTheDocument();
});