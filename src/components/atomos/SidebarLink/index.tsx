import { SidebarLinkWrapper } from './styles'

type SidebarLinkProps = {
  icon: string
  active: boolean
}

export default function SidebarLink({ icon, active }: SidebarLinkProps) {
  return (
    <SidebarLinkWrapper active={active}>
      <img src={icon} />
    </SidebarLinkWrapper>
  )
}
