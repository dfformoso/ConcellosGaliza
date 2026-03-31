import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

jest.mock('./pages/MapPage', () => () => <div>MapPage</div>);
jest.mock('./pages/OndeEstaPage', () => () => <div>OndeEstaPage</div>);



test('renders the home page game options', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /xeo galiza/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Onde está o Concello?' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Os concellos que visitei' })).toBeInTheDocument();
});
