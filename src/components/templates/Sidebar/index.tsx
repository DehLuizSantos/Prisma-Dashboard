import SidebarLink from '@/components/atomos/SidebarLink'

import logout from '../../../assets/icons/Logout.svg'
import logo from '../../../assets/LogoPrisma.svg'
import { SidebarWrapper } from './styles'

type SidebarProps = {
  links: {
    icon: string
    description: string
    link: string
  }[]
}

export default function Sidebar({ links }: SidebarProps) {
  const location = useLocation()
  console.log(location)
  return (
    <SidebarWrapper>
      <img src={logo} alt="Prisma analitcs" />
      <div className="links">
        {links.map((link, index) => (
          <SidebarLink active={link.link === '/dashboard'} {...link} key={index} />
        ))}
      </div>
      <img src={logout} alt="Sair" className="end" />
    </SidebarWrapper>
  )
}
