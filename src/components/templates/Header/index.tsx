import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import Icon from '@/components/atomos/Icon'
import SidebarLink from '@/components/atomos/SidebarLink'
import { theme } from '@/styles/theme'

import closed from '../../../assets/icons/menu-closed.svg'
import opened from '../../../assets/icons/menu-opened.svg'
import setaBaixo from '../../../assets/icons/setaBaixo.svg'
import user from '../../../assets/icons/user (3).svg'
import logo from '../../../assets/LogoPrisma.svg'
import { Backdrop, HeaderTitle, HeaderUser, HeaderWrapper, MenuContainer } from './styles'

type HeaderProps = {
  links: {
    icon: string
    description: string
    link: string
  }[]
}

export default function Header({ links }: HeaderProps) {
  const [active, setActive] = useState(String(location.pathname))

  const empresa = 'Ronron shop'
  const name = 'André'
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  return (
    <HeaderWrapper>
      <HeaderTitle>
        <h2>Você está na:</h2>
        <h3>{empresa}</h3>
      </HeaderTitle>
      <HeaderUser>
        <div className="menu-mobile">
          <Icon
            width={26}
            height={26}
            onClick={() => setOpenMenuMobile(!openMenuMobile)}
            svg={openMenuMobile ? opened : closed}
          />
          {!openMenuMobile && <p>Bom dia {name} </p>}
        </div>
        <div className="menu-user">
          <Icon svg={user} fill={theme.colors.dark} width={30} height={30} />
          <Icon svg={setaBaixo} fill={theme.colors.dark} width={12} height={7} />
        </div>
      </HeaderUser>
      <AnimatePresence>
        {openMenuMobile ? (
          <Backdrop initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MenuContainer
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={logo} alt="Prisma Analitcs" />
              {links.map((link) => (
                <Link
                  key={link.link}
                  to={link.link}
                  onClick={() => {
                    setOpenMenuMobile(false)
                    setActive(link.link)
                  }}
                >
                  <SidebarLink active={link.link === active} {...link} />
                </Link>
              ))}
            </MenuContainer>
          </Backdrop>
        ) : null}
      </AnimatePresence>
    </HeaderWrapper>
  )
}
