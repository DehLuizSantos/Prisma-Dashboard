import styled from '@emotion/styled'

export const SystemShellWrapper = styled.div`
  display: flex;
  position: relative;
  overflow-y: hidden;
  height: 100%;
  padding: 0;
  background-color: ${(props) => props.theme.colors.white};

  .container {
    overflow-y: scroll;
    height: 100%;
    position: relative;
    padding-bottom: 50px;

    /* Scrollbar para Firefox */
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.colors.dark} transparent;

    @media (min-width: ${(props) => props.theme.responsive.laptop}) {
      left: 120px;
    }
  }
  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    padding: 30px 0 30px 30px;
  }
`

export const ContainerShell = styled.div`
  padding: 0;
  width: 100%;
  height: calc(100vh - 60px);
  max-width: 1700px;

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    padding: 0px 60px;
  }
`
