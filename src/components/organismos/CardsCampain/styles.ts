import styled from '@emotion/styled'

export const CardsCampainContainer = styled.div`
  h3 {
    margin: 30px 0;
    font-size: ${(props) => props.theme.fonts.xlarge};
    color: ${(props) => props.theme.colors.grey['300']};
  }

  .campains {
    display: block;

    @media (min-width: ${(props) => props.theme.responsive.laptop}) {
      display: flex;
      justify-content: space-between;
      gap: 30px;
      flex-wrap: wrap;
      align-items: start;
    }
  }
`
