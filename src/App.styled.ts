import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: ${p => p.theme.typography.fontSize};
    font-family: ${p => p.theme.typography.fontFamily};
    color: ${p => p.theme.colors.textDefault};
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: ${p => p.theme.typography.fontFamily};
    font-size: ${p => p.theme.typography.fontSize};
    font-weight:  ${p => p.theme.typography.fontWeight.regular};
    color: ${p => p.theme.colors.textDefault};
  }
  p {
    line-height: 1.5;
    margin-bottom: 1rem;
    font-family: ${p => p.theme.typography.fontFamily};
    font-size: 1rem;
    font-weight: ${p => p.theme.typography.fontWeight.regular};
  }
  h3 {
    line-height: 1.5;
    margin-bottom: 1rem;
    font-family: ${p => p.theme.typography.fontFamily};
    font-size: 1.5rem;
    font-weight: ${p => p.theme.typography.fontWeight.regular};
  }
  hr {
    margin: 3rem 0;
    border: none;
    border-bottom: 1px solid ${p => p.theme.colors.neutral};
  }
`;

export const AppContainer = styled.div`
  max-width: 620px;
  padding: ${p => p.theme.spacing.large};
  margin: 0 auto;
`