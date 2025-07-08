import styled from '@emotion/styled'

export const LoginTemplateWrapper = styled.div`
  height: 100vh;
  text-align: center;
  background: ${(props) => props.theme.colors.dark};
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;

  @media (min-width: 800px) {
    padding: 120px;
  }
`
