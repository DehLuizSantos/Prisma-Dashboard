import styled from '@emotion/styled'

export const LoginTemplateWrapper = styled.div`
  height: 100vh;
  text-align: center;
  background: ${(props) => props.theme.colors.dark};
  padding: 60px;
  display: flex;
  gap: 90px;
  justify-content: space-between;

  @media (min-width: 800px) {
    padding: 120px;
  }
`
