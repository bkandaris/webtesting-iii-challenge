// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

// first test to make sure Display is rendering
test('display rendering', () => {
  render(<Display />);
});

test('display is open', () => {
  const { getByText } = render(<Display closed={false} />);
  const open = getByText(/Open/i);
  fireEvent.click(getByText(/Open/i));
  expect(open).toHaveClass('green-led');
});

test('its rendering', () => {
  const { getByText } = render(<Display closed={true} />);
  const closed = getByText(/Closed/i);
  fireEvent.click(getByText(/Closed/i));
  expect(closed).toHaveClass('red-led');
});

test('display shows unlocked', () => {
  const { getByText } = render(<Display locked={false} />);
  const unlocked = getByText(/Unlocked/i);
  fireEvent.click(getByText(/Unlocked/i));
  expect(unlocked).toHaveClass('green-led');
});

test('display shows locked', () => {
  const { getByText } = render(<Display locked={true} />);
  const locked = getByText(/Locked/i);
  fireEvent.click(getByText(/Locked/i));
  expect(locked).toHaveClass('red-led');
});

// a snapshot test
test('snapshot of component', () => {
  const wrapper = render(<Display />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});
