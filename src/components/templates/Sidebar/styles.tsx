import styled from '@emotion/styled'

export const SidebarWrapper = styled.aside`
  display: none;

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    width: 120px;
    position: fixed;
    height: calc(100% - 60px);
    border-radius: 12px;
    background-color: ${(props) => props.theme.colors.dark};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    img {
      width: 75px;
      margin: 30px 0 90px 0;
    }

    .logout {
      cursor: pointer;
      height: 100px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 47px;
        height: 47px;
        color: white;
      }
    }
  }
`
