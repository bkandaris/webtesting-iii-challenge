// Test away
import React from 'react';
import Dashboard from './Dashboard';
import * as rtl from '@testing-library/react';

// seeing if it renders
test('It renders dashboard', () => {
  rtl.render(<Dashboard />);
});

// The snapshot test
test('component snapshot', () => {
  const wrapper = rtl.render(<Dashboard />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});
