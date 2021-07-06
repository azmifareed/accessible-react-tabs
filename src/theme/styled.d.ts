import 'styled-components';

interface ITheme {
  colors: {
    primary: string
    secondary: string
    neutral: string
    textDefault: string
  },
  spacing: {
    small: string
    medium: string
    large: string
  },
  typography: {
    fontFamily: string
    fontSize: string
    fontWeight: {
      regular: string
      bold: string
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}