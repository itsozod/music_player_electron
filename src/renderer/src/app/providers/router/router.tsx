import { Home } from '@renderer/pages/Home'
import { Profile } from '@renderer/pages/Profile'
import { Signin } from '@renderer/pages/SignIn'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedLayout from './ProtectedLayout'
import { Playlists } from '@renderer/pages/Playlists'
import { PlaylistSongs } from '@renderer/pages/PlaylistSongs'

const router = createBrowserRouter([
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
      },
      {
        path: '/playlists',
        element: <Playlists />
      },
      {
        path: '/playlists/:id',
        element: <PlaylistSongs />
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
