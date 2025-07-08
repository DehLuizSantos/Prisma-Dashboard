import Icon from '@/components/atomos/Icon'
import IconMenu from '@/components/moleculas/Menu'
import MenuMobile from '@/components/moleculas/MenuMobile'
import { theme } from '@/styles/theme'

import trocar from '../../../assets/icons/change.svg'
import logout from '../../../assets/icons/Logout.svg'
import closed from '../../../assets/icons/menu-closed.svg'
import opened from '../../../assets/icons/menu-opened.svg'
import modulo from '../../../assets/icons/modules.svg'
import setaBaixo from '../../../assets/icons/setaBaixo.svg'
import user from '../../../assets/icons/user (3).svg'
import { HeaderTitle, HeaderUser, HeaderWrapper } from './styles'

type HeaderProps = {
  links: {
    icon: string
    description: string
    link: string
  }[]
}

export default function Header({ links }: HeaderProps) {
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
          <IconMenu
            icon={<Icon svg={setaBaixo} fill={theme.colors.dark} width={12} height={7} />}
            items={[
              {
                label: 'Trocar de senha',
                icon: <Icon svg={trocar} fill={theme.colors.dark} width={20} height={14} />,
                onClick: () => console.log('Perfil'),
              },
              {
                label: 'Trocar de modulo',
                icon: <Icon svg={modulo} fill={theme.colors.dark} width={18} height={18} />,
                onClick: () => console.log('Perfil'),
              },
              {
                label: 'Sair',
                icon: <Icon svg={logout} fill={theme.colors.dark} width={47} height={47} />,
                onClick: () => console.log('Sair'),
              },
            ]}
          />
        </div>
      </HeaderUser>
      <MenuMobile links={links} openMenuMobile={openMenuMobile} setOpenMenuMobile={setOpenMenuMobile} />
    </HeaderWrapper>
  )
}
