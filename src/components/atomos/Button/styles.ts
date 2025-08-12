import styled from '@emotion/styled'

export const ButtonWrapper = styled.div`
  button {
    background-color: ${(props) => props.theme.colors.green['300']};
    height: 40px;
    width: 100%;
    min-width: 292px;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    border-radius: 5px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 2px 2px 4px ${(props) => props.theme.colors.grey['500']};
    }
  }
`
