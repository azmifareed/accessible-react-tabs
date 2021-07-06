import styled from 'styled-components';

export interface IContainer {
  isSelected: boolean;
}

export const Container = styled.div<IContainer>`
  display: ${p => p.isSelected ? 'flex' : 'none'};
  flex-direction: column;
  padding: ${p => p.theme.spacing.large};
`