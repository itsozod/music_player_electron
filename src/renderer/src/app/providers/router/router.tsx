import { Home } from '@renderer/pages/Home'
import { Profile } from '@renderer/pages/Profile'
import { Signin } from '@renderer/pages/SignIn'
import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import ProtectedLayout from './ProtectedLayout'

const router = createHashRouter([
  {
    path: '/',
    element: <ProtectedLayout />,
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
