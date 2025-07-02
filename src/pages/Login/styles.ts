import styled from '@emotion/styled'

export const LoginWrapper = styled.div`
  height: 100vh;
  text-align: center;
  background: ${(props) => props.theme.colors.dark};
  padding: 60px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 800px) {
    padding: 120px;
  }
`
