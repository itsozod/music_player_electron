import { Home } from '@renderer/pages/Home'
import { Profile } from '@renderer/pages/Profile'
import { Signin } from '@renderer/pages/SignIn'
import { Layout } from '@renderer/widgets/layout'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  },

  {
    index: true,
    path: '/signin',
    element: <Signin />
  }
])

export default router
