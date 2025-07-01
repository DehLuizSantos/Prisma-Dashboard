declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string
      dark: string
      leaf: string
      grey: {
        300: string
        500: string
      }
      green: {
        300: string
        500: string
      }
      red: {
        300: string
      }
    }
    fonts: {
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      xxxlarge: string
    }
  }
}

export const theme = {
  colors: {
    white: '#DFECF1',
    dark: '#000108',
    leaf: '#D3E2E8',
    grey: {
      300: '#303A33',
      500: '#675B5B',
    },
    green: {
      300: '#55844D',
      500: '#9CEB8E',
    },
    red: {
      300: '#933032',
    },
  },
  fonts: {
    xsmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '22px',
    xxlarge: '28px',
    xxxlarge: '36px',
  },
}
