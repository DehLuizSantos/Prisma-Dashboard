import styled from '@emotion/styled'

import { theme } from '@/styles/theme'

type SidebarWrapperProps = {
  active: boolean
}
export const SidebarLinkWrapper = styled.div<SidebarWrapperProps>`
  background-color: ${(props) => (props.active ? theme.colors.white : theme.colors.dark)};
`
