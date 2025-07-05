import { Outlet } from 'react-router-dom'

import dashboard from '../../../assets/icons/dashboard.svg'
import modules from '../../../assets/icons/modules.svg'
import products from '../../../assets/icons/products.svg'
import users from '../../../assets/icons/users.svg'
import Sidebar from '../Sidebar'
import { SystemShellWrapper } from './styles'

export default function SystemShell() {
  const links = [
    {
      link: '/dashboard',
      icon: dashboard,
      description: 'Dashboard mostrando os dados',
    },
    {
      link: '/users',
      icon: users,
      description: 'Dashboard mostrando os dados',
    },
    {
      link: '/product',
      icon: products,
      description: 'Dashboard mostrando os dados',
    },
    {
      link: '/module',
      icon: modules,
      description: 'Dashboard mostrando os dados',
    },
  ]

  return (
    <SystemShellWrapper>
      <Sidebar links={links} />
      <div>
        <header>exemplo</header>
        <Outlet />
      </div>
    </SystemShellWrapper>
  )
}
