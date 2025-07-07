import { Link } from 'react-router-dom'

import Icon from '@/components/atomos/Icon'
import SidebarLink from '@/components/atomos/SidebarLink'
import Tooltip from '@/components/atomos/ToolTip'

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
  const [active, setActive] = useState(String(location.pathname))
  return (
    <SidebarWrapper>
      <div className="links">
        <img src={logo} alt="Prisma analitcs" />
        {links.map((link) => (
          <Link key={link.link} to={link.link} onClick={() => setActive(link.link)}>
            <SidebarLink active={link.link === active} {...link} />
          </Link>
        ))}
      </div>
      <div className="logout">
        <Tooltip position="right" content="Logout">
          <Icon width={47} height={47} svg={logout} className="end" />
        </Tooltip>
      </div>
    </SidebarWrapper>
  )
}
