import styled from '@emotion/styled'

import { theme } from '@/styles/theme'

export const DashboardContainer = styled.div`
  padding: 30px;
  max-width: 1200px;

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    padding: 0;
  }

  h2 {
    color: ${theme.colors.grey['300']};
    font-weight: bold;
    font-size: ${(props) => props.theme.fonts.xxlarge};
    margin-top: 0;

    @media (min-width: ${(props) => props.theme.responsive.laptop}) {
      margin-top: 30px;
    }
  }
`
