import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from '../components/Counter'
// import necessary react testing library helpers here
// import the Counter component here

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const countMessage = screen.getByText("Counter");
  expect(countMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('+'));
  await screen.findByTestId('count');

  expect(screen.getByText('1')).toBeInTheDocument();
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText('-'));
  await screen.findByTestId('count');

  expect(screen.getByText('-1')).toBeInTheDocument();
});
