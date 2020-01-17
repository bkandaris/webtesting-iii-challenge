// Test away!
import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

test('making sure its rendering', () => {
  render(<Controls />);
});

test('open gate', () => {
  const setMock = jest.fn();
  const { getByText } = render(
    <Controls toggleClosed={setMock} closed={true} locked={true} />
  );
  fireEvent.click(getByText(/Open Gate/i));
  expect(getByText(/Open Gate/i)).toBeDisabled();
});

test('lock gate', () => {
  const setMock = jest.fn();
  const { getByText } = render(
    <Controls toggleLocked={setMock} closed={false} locked={false} />
  );
  fireEvent.click(getByText(/Lock Gate/i));
  expect(getByText(/Lock Gate/i)).toBeDisabled();
});

// snapshot test
test('snapshot of component', () => {
  const wrapper = render(<Controls />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});
