import React from 'react';
import { render } from '../../../utils/test-utils';
import { TabPanel } from './TabPanel';

test('renders TabPanel correctly', () => {
  const component = render(<TabPanel 
    id="test-tab" 
    tabIndex={0} 
    ariaLabelledby="test" 
    isSelected={true}>test child</TabPanel>)
  expect(component.baseElement).toMatchSnapshot();
});

test('renders TabPanel correctly when not selected', () => {
  const component = render(<TabPanel 
    id="test-tab" 
    tabIndex={0} 
    ariaLabelledby="test" 
    isSelected={false}>test child</TabPanel>)
  expect(component.baseElement).toMatchSnapshot();
});


