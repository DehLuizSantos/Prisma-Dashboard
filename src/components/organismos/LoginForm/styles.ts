import styled from '@emotion/styled'

export const LoginFormWrapper = styled.div`
  text-align: center;
  max-width: 292px;

  @media (min-width: 800px) {
    text-align: start;
    padding: 0;
  }

  h2 {
    color: ${(props) => props.theme.colors.green['500']};
    font-size: ${(props) => props.theme.fonts.xxxlarge};
    margin-top: 30px;
  }
  .recuperar {
    display: flex;
    gap: 5px;
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fonts.small};
    margin-bottom: 30px;
    width: 292px;

    @media (min-width: 800px) {
      width: 300px;
    }

    span {
      font-weight: bold;
      text-decoration: underline;
    }
  }

  .mt-auto {
    margin-top: 150px;
  }
`

export const LoginFormForm = styled.form`
  margin-top: 90px;
  text-align: start;
`
