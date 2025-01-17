import { Home } from '@renderer/pages/Home'
import { Profile } from '@renderer/pages/Profile'
import { Signin } from '@renderer/pages/SignIn'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/',
    index: true,
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile />
  }
])

export default router
