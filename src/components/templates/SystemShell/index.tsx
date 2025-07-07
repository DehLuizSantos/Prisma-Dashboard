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
      link: '/system/product',
      icon: products,
      description: 'Produtos',
    },
    {
      link: '/system/module',
      icon: modules,
      description: 'Modulos',
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
