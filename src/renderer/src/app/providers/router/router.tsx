import { Home } from '@renderer/pages/Home'
import { Profile } from '@renderer/pages/Profile'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
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
