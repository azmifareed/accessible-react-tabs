import styled, { css } from 'styled-components';

interface IStyledTab {
  isSelected?: boolean;
}

export const StyledTab = styled.button<IStyledTab>`
  font-size: 1.0625rem;
  font-family: ${p => p.theme.typography.fontFamily};
  font-weight:  ${p => p.theme.typography.fontWeight.regular};
  padding: ${p => `${p.theme.spacing.small} ${p.theme.spacing.large}`};
  color: ${p => p.theme.colors.textDefault};
  cursor: pointer;
  border: 0;
  background: transparent;
  outline: 0;
  position: relative;
  &::after {
    ${p => p.isSelected ? css`
      content: '';
      border-bottom: ${p => `4px solid ${p.theme.colors.secondary}`};
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
    ` : null}
  }
`
