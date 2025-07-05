import { createBrowserRouter } from 'react-router-dom'

import LoginTemplate from '@/components/templates/LoginTemplate'
import Login from '@/pages/Login'
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
      ],
    },
  ],
  { basename: import.meta.env.VITE_PUBLIC_PATH as string },
)

export default router
