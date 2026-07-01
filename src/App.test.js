import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the invitation title and call to action', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /^Grace$/i, level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Ouvrez l'invitation/i })).toBeInTheDocument();
});
