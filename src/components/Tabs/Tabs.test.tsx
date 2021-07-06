import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import { Tabs, Tab } from '.';

function renderTabs() {
  return render(<Tabs ariaLabel="test label">
    <Tab id="tab1" label="Tab 1" isSelected={true}>tab panel 1</Tab>
    <Tab id="tab2" label="Tab 2">tab panel 2</Tab>
  </Tabs>)
}

test('renders Tabs correctly', () => {
  const component = renderTabs();
  expect(component.baseElement).toMatchSnapshot();
});

test('handles tab nav item click correctly', () => {
  const component = renderTabs();
  let tab;

  fireEvent.click(component.getByText(/Tab 2/i));
  tab = screen.getByText(/Tab 2/i);
  expect(tab.attributes.getNamedItem('aria-selected')).toBeTruthy;
  tab = screen.getByText(/Tab 1/i);
  expect(tab.attributes.getNamedItem('aria-selected')).toBeFalsy;
  expect(component.baseElement).toMatchSnapshot();

  fireEvent.click(component.getByText(/Tab 1/i));
  tab = screen.getByText(/Tab 1/i);
  expect(tab.attributes.getNamedItem('aria-selected')).toBeTruthy;
  tab = screen.getByText(/Tab 2/i);
  expect(tab.attributes.getNamedItem('aria-selected')).toBeFalsy;
  expect(component.baseElement).toMatchSnapshot();
});

test('handles tab nav item left arrow keypress correctly', () => {
  const component = renderTabs();

  fireEvent.keyDown(component.getByText(/Tab 1/i),{ key: 'ArrowLeft', code: 'ArrowLeft', which: 37, keyCode: 37});
  expect(component.baseElement).toMatchSnapshot();


  fireEvent.keyDown(component.getByText(/Tab 2/i),{ key: 'ArrowLeft', code: 'ArrowLeft', which: 37, keyCode: 37});
  expect(component.baseElement).toMatchSnapshot();
});

test('handles tab nav item right arrow keypress correctly', () => {
  const component = renderTabs();

  fireEvent.keyDown(component.getByText(/Tab 1/i),{ key: 'ArrowRight', code: 'ArrowRight', which: 39, keyCode: 39});
  expect(component.baseElement).toMatchSnapshot();


  fireEvent.keyDown(component.getByText(/Tab 2/i),{ key: 'ArrowRight', code: 'ArrowRight', which: 39, keyCode: 39});
  expect(component.baseElement).toMatchSnapshot();
});



test('handles tab nav item arrow keypress correctly when no item is selected', () => {
const component = render(<Tabs ariaLabel="test label">
    <Tab id="tab1" label="Tab 1">tab panel 1</Tab>
    <Tab id="tab2" label="Tab 2">tab panel 2</Tab>
  </Tabs>)

  fireEvent.keyDown(component.getByText(/Tab 1/i),{ key: 'ArrowLeft', code: 'ArrowLeft', which: 37, keyCode: 37});
  expect(component.baseElement).toMatchSnapshot();


  fireEvent.keyDown(component.getByText(/Tab 2/i),{ key: 'ArrowRight', code: 'ArrowRight', which: 39, keyCode: 39});
  expect(component.baseElement).toMatchSnapshot();
});

