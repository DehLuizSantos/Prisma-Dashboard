import styled from '@emotion/styled'

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 30px 0;
  img {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  input {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.leaf};
    height: 45px;
    min-width: 292px;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.leaf};
    font-weight: bold;
    font-size: ${(props) => props.theme.fonts.large};
    padding-left: 45px;

    &:active {
      border: 2px solid ${(props) => props.theme.colors.leaf};
    }

    &:focus-visible {
      border: 2px solid ${(props) => props.theme.colors.leaf};
      outline: none;
    }
  }

  p {
    font-size: ${(props) => props.theme.fonts.small};
    color: ${(props) => props.theme.colors.red['300']};
  }
`
