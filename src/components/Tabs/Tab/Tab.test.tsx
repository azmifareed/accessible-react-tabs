import React from 'react';
import { render } from '../../../utils/test-utils';
import { Tab } from './Tab';


test('renders Tab correctly', () => {
  const component = render(<Tab id="test" label="test label">test child</Tab>)
  expect(component.baseElement).toMatchSnapshot();
});
