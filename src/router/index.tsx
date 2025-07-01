import { createBrowserRouter } from 'react-router-dom'

import Login from '@/pages/Login'

const router = createBrowserRouter(
  [
    {
      path: '',
      children: [
        {
          path: '',
          element: <Login />,
        },
      ],
    },
  ],
  { basename: import.meta.env.VITE_PUBLIC_PATH as string },
)

export default router
