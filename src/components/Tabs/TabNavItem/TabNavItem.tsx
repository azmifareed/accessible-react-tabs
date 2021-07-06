import React from 'react';
import { StyledTab } from './TabNavItem.styled';

export interface ITabNavItemProps {
  children: string;
  tabIndex?: number;
  isSelected?: boolean;
  id: string;
  tabRef: (instance: HTMLButtonElement) => void;
  index: number;
  ariaControls: string;
  onSelect: (event: MouseEvent, index: number, id: string) => void;
  onKeyDown: (event: any) => void;
}

export function TabNavItem({ children, tabIndex, isSelected, id, tabRef, index, ariaControls, onSelect, onKeyDown }: ITabNavItemProps) {
  return (
    <StyledTab
      ref={tabRef}
      role="tab"
      aria-selected={!!isSelected}
      aria-controls={ariaControls}
      id={id}
      tabIndex={tabIndex}
      onClick={(event: any) => onSelect(event, index, id)}
      onKeyDown={onKeyDown}
      isSelected={isSelected}
    >{children}</StyledTab>
  );
}
