import { createBrowserRouter } from 'react-router-dom'

import { LoginTemplate } from '@/components/templates/LoginTemplate'
import Login from '@/pages/Login'

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <LoginTemplate />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
      ],
    },
  ],
  { basename: import.meta.env.VITE_PUBLIC_PATH as string },
)

export default router
