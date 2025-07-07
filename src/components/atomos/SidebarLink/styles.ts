import styled from '@emotion/styled'

import { theme } from '@/styles/theme'

type SidebarWrapperProps = {
  active: boolean
}
export const SidebarLinkWrapper = styled.div<SidebarWrapperProps>`
  background-color: ${(props) => (props.active ? theme.colors.white : theme.colors.dark)};
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;

  svg {
    width: 24px;
    height: fill;
    color: ${(props) => (props.active ? theme.colors.dark : theme.colors.white)};
  }
`
