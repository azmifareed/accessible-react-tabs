import React, { ReactElement, useState, useEffect, useRef } from 'react';
import { TabNav, TabNavItem, TabPanel } from '.';
import { Wrapper } from './Tabs.styled';
import { useQueryParams } from '../../hooks'

export interface ITabsProps {
  children: ReactElement[];
  ariaLabel: string;
}

export function Tabs({ children, ariaLabel }: ITabsProps) {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>();
  const tabRef = useRef<HTMLButtonElement[]>([]);
  const [tabParam, setTabParam] = useQueryParams('tab');

  /**
   * Handle the click event on a tab item
   * @param e Click event
   * @param index Index of the clicked tab item 
   */
  const handleSelection = (e: MouseEvent, index: number, id: string) => {
    e.preventDefault();
    setSelectedTabIndex(index);
    setTabParam(id);
    tabRef.current[index]?.focus();
  }

  /**
   * Handle keyboard navigation on tab items
   * @param e Keyboard event
   */
  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    // Handle right arrow keypress
    if (e.keyCode === 39) {
      // Set the tab index to the next tab item or loop back to the first item if on last tab
      const tabIndex = selectedTabIndex !== undefined && children.length - 1 > selectedTabIndex ? selectedTabIndex + 1 : 0;
      setSelectedTabIndex(tabIndex);
      tabRef.current[tabIndex]?.focus();
    }

    // Handle left arrow keypress
    if (e.keyCode === 37) {
      // Set the tab index to the previou tab item or loop back to the last item if on first tab
      const tabIndex = selectedTabIndex !== undefined && selectedTabIndex > 0 ? selectedTabIndex - 1 : children.length - 1;
      setSelectedTabIndex(tabIndex);
      tabRef.current[tabIndex]?.focus();
    }
  };

  useEffect(() => {
    tabRef.current = tabRef.current.slice(0, children.length);
  }, [children]);

  useEffect(() => {
    if (tabParam !== undefined) {
      let tabIndex = children.findIndex((child: ReactElement) => child.props.id === tabParam);
      tabIndex = tabIndex >= 0 ? tabIndex : children.findIndex((child: ReactElement) => child.props.isSelected === true);
      tabIndex = tabIndex >= 0 ? tabIndex : 0;
      setSelectedTabIndex(tabIndex);
    }
  }, [children, tabParam]);

  return (
    <Wrapper>
      <TabNav ariaLabel={ariaLabel} onKeyDown={handleKeyDown}>
        {
          React.Children.map(children, (child: ReactElement, index: number) => {
            const { id, label } = child?.props;
            return (<TabNavItem
              tabRef={(el: HTMLButtonElement) => tabRef.current[index] = el}
              isSelected={selectedTabIndex === index}
              ariaControls={`${id}-tab`}
              id={id}
              index={index}
              tabIndex={selectedTabIndex !== index ? -1 : undefined}
              onSelect={handleSelection}
              onKeyDown={handleKeyDown}
            >{label}</TabNavItem>)
          })
        }
      </TabNav>

      {
        React.Children.map(children, (child: ReactElement, index: number) => {
          const { id, children } = child?.props;
          return (<TabPanel
            tabIndex={0}
            id={`${id}-tab`}
            ariaLabelledby={id}
            isSelected={selectedTabIndex === index}
          >
            {children}
          </TabPanel>)
        })
      }
    </Wrapper>
  );
}
