import styled from '@emotion/styled'

export const ModulesWrapper = styled.div`
  margin: 60px;

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    width: 1200px;
    height: 780px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 120px 180px 120px 5px;
    padding: 80px 100px;
    text-align: start;
  }
`
export const ModulesContainer = styled.div`
  display: flex;
`
