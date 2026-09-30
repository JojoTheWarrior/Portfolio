import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Name from './components/Name';
import Library from './components/Library';
import { algorithms } from './data/content';

test('name reveal reaches both complete names and exposes its current value', () => {
  render(<Name />);
  const slider = screen.getByRole('slider');
  expect(slider).toHaveAttribute('aria-valuetext', 'Joshua Wang');
  fireEvent.change(slider, { target: { value: '0' } });
  expect(slider).toHaveAttribute('aria-valuetext', 'JojoTheWarrior');
  fireEvent.change(slider, { target: { value: '50' } });
  expect(slider).toHaveAttribute('aria-valuetext', '50% Joshua Wang, 50% JojoTheWarrior');
});

test('library combines topic and text filters and can recover from an empty search', () => {
  render(<MemoryRouter><Library /></MemoryRouter>);
  expect(screen.getByRole('status')).toHaveTextContent(`${algorithms.length} entries`);
  fireEvent.click(screen.getByRole('button', { name: 'Geometry' }));
  expect(screen.getByRole('status')).toHaveTextContent('3 entries in geometry');
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: '  HALF-PLANE  ' } });
  expect(screen.getByRole('status')).toHaveTextContent('1 entry in geometry');
  expect(screen.getByRole('link', { name: /Half-plane intersection/ })).toHaveAttribute('href', expect.stringContaining('/master/half_plane_intersection.cpp'));
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'no-such-algorithm' } });
  expect(screen.getByText('No matches this time.')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /clear filters/ }));
  expect(screen.getByRole('status')).toHaveTextContent(`${algorithms.length} entries`);
  expect(screen.getByRole('searchbox')).toHaveValue('');
  expect(screen.getByRole('button', { name: 'All', exact: true })).toHaveAttribute('aria-pressed', 'true');
});
