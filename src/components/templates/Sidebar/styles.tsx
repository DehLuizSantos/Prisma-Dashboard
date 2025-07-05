import styled from '@emotion/styled'

export const SidebarWrapper = styled.aside`
  border: 1px solid red;
  width: 120px;
  height: 100%;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.dark};
  text-align: center;

  img {
    width: 75px;
    margin: 30px 20px;
  }

  .end {
    width: 30px;
    position: fixed;
    bottom: 30px;
    left: 60px;
  }
`
