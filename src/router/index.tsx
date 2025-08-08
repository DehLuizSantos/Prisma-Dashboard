import { createBrowserRouter } from 'react-router-dom'

import LoginTemplate from '@/components/templates/LoginTemplate'
import SystemShell from '@/components/templates/SystemShell'
import Campanhas from '@/pages/Campanhas'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/Login'
import Modulos from '@/pages/Modules'
import Register from '@/pages/Register'
import ResetPassword from '@/pages/ResetPassoword'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LoginTemplate />,
      children: [
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/registrar',
          element: <Register />,
        },
        {
          path: '/recuperar',
          element: <ResetPassword />,
        },
        {
          path: '/modulos',
          element: <Modulos />,
        },
      ],
    },
    {
      path: '/system',
      element: <SystemShell />,
      children: [
        {
          path: '/system/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/system/users',
          element: <Dashboard />,
        },
        {
          path: '/system/campaing',
          element: <Campanhas />,
        },
        {
          path: '/system/integrations',
          element: <Dashboard />,
        },
      ],
    },
  ],
  { basename: import.meta.env.VITE_PUBLIC_PATH as string },
)

export default router
