import styled from '@emotion/styled'

import { theme } from '@/styles/theme'

type SidebarWrapperProps = {
  active: boolean
}
export const SidebarLinkWrapper = styled.div<SidebarWrapperProps>`
  width: 350px;
  background-color: ${(props) => (props.active ? theme.colors.white : theme.colors.dark)};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 60px;
  margin: 0 auto;
  gap: 15px;
  padding: 15px 20px;

  p {
    display: block;
    color: ${(props) => (props.active ? theme.colors.dark : theme.colors.white)};
    font-weight: bold;
  }

  svg {
    color: ${(props) => (props.active ? theme.colors.dark : theme.colors.white)};
  }

  @media (min-width: ${(props) => props.theme.responsive.laptop}) {
    justify-content: center;
    width: 60px;
    margin: 10px auto;

    svg {
      width: 22px;
      height: 22px;
      color: ${(props) => (props.active ? theme.colors.dark : theme.colors.white)};
    }

    p {
      display: none;
    }
  }
`
