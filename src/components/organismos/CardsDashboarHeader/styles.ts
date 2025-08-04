import styled from '@emotion/styled'

export const CardsDashboardHeaderContainer = styled.div`
  display: block;

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
  }
`
