import styled from '@emotion/styled'

export const UsuariosWrapper = styled.div`
  margin: 30px 0;

  h2 {
    color: ${(props) => props.theme.colors.grey['300']};
    font-weight: bold;
    font-size: ${(props) => props.theme.fonts.xxlarge};
    margin-top: 0;
    margin-left: 30px;

    @media (min-width: ${(props) => props.theme.responsive.laptop}) {
      margin-top: 30px;
      margin-left: 0;
    }
  }
`
