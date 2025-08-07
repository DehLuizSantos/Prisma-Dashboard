import styled from '@emotion/styled'

export const ModulesCardWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.white};
  box-shadow: 10px 10px 4px ${(props) => props.theme.colors.green['300']};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.dark};
  padding: 30px 50px;
  text-align: center;
`
