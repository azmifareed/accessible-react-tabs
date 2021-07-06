import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../../utils/test-utils';
import { TabNavItem, ITabNavItemProps } from './TabNavItem';

const id = 'test';
const tabRef = {
  current: {
    focus: jest.fn()
  }
}
const onSelect = jest.fn();
const onKeyDown = jest.fn();

const initProps = {
  id,
  tabRef: () => tabRef.current,
  isSelected: false,
  ariaControls: `${id}-tab`,
  index: 0,
  tabIndex: -1,
  onSelect,
  onKeyDown,
  children: 'tab text'
}

function renderTabNavItem(props: ITabNavItemProps) {
  return render(<TabNavItem {...props} />)
}

test('renders TabNavItem text', () => {
  renderTabNavItem(initProps);
  const linkElement = screen.getByText(/tab text/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders TabNavItem correctly', () => {
  const component = renderTabNavItem(initProps);
  expect(component.baseElement).toMatchSnapshot();
});

test('renders TabNavItem correctly when selected', () => {
  const component = renderTabNavItem({...initProps, isSelected: true});
  expect(component.baseElement).toMatchSnapshot();
});

test('onSelect is fired on click', () => {
  const component = renderTabNavItem(initProps);
  fireEvent.click(component.getByText(/tab text/i));
  expect(onSelect).toHaveBeenCalledTimes(1);
  expect(component.baseElement).toMatchSnapshot();
});

