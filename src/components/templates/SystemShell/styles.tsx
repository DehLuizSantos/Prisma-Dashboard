import styled from '@emotion/styled'

export const SystemShellWrapper = styled.div`
  display: flex;
  height: 100vh;
  padding: 0;
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    padding: 30px 0 30px 30px;
  }
`

export const ContainerShell = styled.div`
  padding: 0;
  width: 100%;
  height: 100%;

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    padding: 0px 60px;
  }
`
