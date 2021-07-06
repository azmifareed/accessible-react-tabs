import React from 'react';
import { render } from './utils/test-utils';
import App from './App';

test('renders app correctly', () => {
  const component = render(<App />);
  expect(component.baseElement).toMatchSnapshot();
});
