import { ThemeProvider } from '@emotion/react'
import { FC, Fragment, ReactNode } from 'react'

import { GlobalStyles } from '@/styles/global'
import { theme } from '@/styles/theme'

interface GlobalProviderProps {
  children: ReactNode
}

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </Fragment>
  )
}

GlobalProvider.displayName = 'GlobalProvider'

export default GlobalProvider
