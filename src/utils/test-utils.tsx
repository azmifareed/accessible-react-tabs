import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const AllTheProviders: FC = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };