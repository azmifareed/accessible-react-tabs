import React, { ReactNode } from 'react';
import { Container } from './TabNav.styled';

export interface ITabNavProps {
  children: ReactNode;
  ariaLabel: string;
  onKeyDown: (event: any) => void;
}

export function TabNav ({ children, ariaLabel }: ITabNavProps) {
  return (
    <Container role="tablist" aria-label={ariaLabel}>
      { children }
    </Container>
  );
}
