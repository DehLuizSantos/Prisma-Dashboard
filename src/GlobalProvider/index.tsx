import { ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, Fragment, ReactNode } from 'react'

import { GlobalStyles } from '@/styles/global'
import { theme } from '@/styles/theme'

interface GlobalProviderProps {
  children: ReactNode
}

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 30,
        refetchOnWindowFocus: false,
      },
    },
  })
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          {children}
          <GlobalStyles />
        </ThemeProvider>
      </QueryClientProvider>
    </Fragment>
  )
}

GlobalProvider.displayName = 'GlobalProvider'

export default GlobalProvider
