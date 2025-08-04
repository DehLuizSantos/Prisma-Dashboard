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
        100: string
      }
      blue: {
        300: string
        500: string
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
    responsive: {
      laptop: string
      mobile: string
      desktop: string
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
      100: '#EB998E',
    },
    blue: {
      300: '#8EE4EB',
      500: '#3D2FB8',
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
  responsive: {
    laptop: '800px',
    mobile: '420px',
    desktop: '1400px',
  },
}
