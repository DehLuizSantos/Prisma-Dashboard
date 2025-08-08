import { Outlet } from 'react-router-dom'

import campaing from '../../../assets/icons/campaing.svg'
import dashboard from '../../../assets/icons/dashboard.svg'
import integracoes from '../../../assets/icons/modules.svg'
import users from '../../../assets/icons/users.svg'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { ContainerShell, SystemShellWrapper } from './styles'

export default function SystemShell() {
  const links = [
    {
      link: '/system/dashboard',
      icon: dashboard,
      description: 'Dashboard',
    },
    {
      link: '/system/users',
      icon: users,
      description: 'Usuários',
    },
    {
      link: '/system/campaing',
      icon: campaing,
      description: 'Campanha',
    },
    {
      link: '/system/integrations',
      icon: integracoes,
      description: 'Integrações',
    },
  ]

  return (
    <SystemShellWrapper>
      <Sidebar links={links} />
      <ContainerShell>
        <div className="container">
          <Header links={links} />
          <Outlet />
        </div>
      </ContainerShell>
    </SystemShellWrapper>
  )
}
