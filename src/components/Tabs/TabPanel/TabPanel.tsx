import React, { ReactNode } from 'react';
import { Container } from './TabPanel.styled';

export interface ITabPanelProps {
  id: string;
  tabIndex?: number;
  ariaLabelledby: string;
  isSelected?: boolean;
  children?: ReactNode;
}

export function TabPanel ({ id, tabIndex, ariaLabelledby, isSelected, children }: ITabPanelProps) {
  return (
    <Container role="tabpanel" tabIndex={tabIndex} id={id} aria-labelledby={ariaLabelledby} isSelected={!!isSelected}>
      {children}
    </Container>
  );
}
