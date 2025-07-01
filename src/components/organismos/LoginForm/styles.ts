import styled from '@emotion/styled'

export const LoginFormWrapper = styled.div`
  padding: 60px;
  text-align: center;

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
