import React from 'react';
import { render } from '../../../utils/test-utils';
import { TabNav } from './TabNav';


test('renders TabNav correctly', () => {
  const component = render(<TabNav ariaLabel="test label">test child</TabNav>)
  expect(component.baseElement).toMatchSnapshot();
});


