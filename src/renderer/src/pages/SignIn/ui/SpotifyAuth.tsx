const scopes = [
  'streaming',
  'user-read-email',
  'user-library-read',
  'user-library-modify',
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-private',
  'user-top-read'
]

const appUrl = `https://accounts.spotify.com/authorize?client_id=d14b3fd42bc24d9eb288ee6b17848d83&response_type=code&redirect_uri=http://localhost:3000/signin&scope=${scopes.join(
  '%20'
)}&show_dialog=true`

import { getTokenInfo } from '@renderer/shared/api/token/getTokenInfo'
import { tokenInstance } from '@renderer/shared/utils'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import useSWRMutation from 'swr/mutation'
const SpotifyAuth = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const code = searchParams.get('code')

  const { isMutating, trigger: auth } = useSWRMutation(
    'https://accounts.spotify.com/api/token',
    getTokenInfo
  )

  useEffect(() => {
    if (code) {
      auth({ code })
        .then((res) => {
          tokenInstance.setToken(res.access_token)
          navigate('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [code])

  return (
    <Link
      className="bg-green-800 w-full p-2 flex items-center justify-center gap-1 text-white hover:bg-green-950 rounded-[50px]"
      to={appUrl}
    >
      {isMutating && <Loader2 className="animate-spin" />}
      Login with Spotify
    </Link>
  )
}

export default SpotifyAuth
