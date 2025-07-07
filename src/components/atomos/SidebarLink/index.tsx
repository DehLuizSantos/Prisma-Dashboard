import { theme } from '@/styles/theme'

import Icon from '../Icon'
import Tooltip from '../ToolTip'
import { SidebarLinkWrapper } from './styles'

type SidebarLinkProps = {
  icon: string
  active: boolean
  description: string
}

export default function SidebarLink({ icon, active, description }: SidebarLinkProps) {
  return (
    <SidebarLinkWrapper active={active}>
      <Tooltip content={description} position="right">
        <Icon svg={icon} fill={active ? theme.colors.dark : theme.colors.white} />
      </Tooltip>
    </SidebarLinkWrapper>
  )
}
