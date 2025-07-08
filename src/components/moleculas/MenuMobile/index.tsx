import { AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import SidebarLink from '@/components/atomos/SidebarLink'

import logo from '../../../assets/LogoPrisma.svg'
import { Backdrop, MenuContainer } from './styles'

type MenuMobileProps = {
  links: {
    icon: string
    description: string
    link: string
  }[]
  openMenuMobile: boolean
  setOpenMenuMobile: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuMobile({ links, openMenuMobile, setOpenMenuMobile }: MenuMobileProps) {
  const [active, setActive] = useState(String(location.pathname))

  return (
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
  )
}
