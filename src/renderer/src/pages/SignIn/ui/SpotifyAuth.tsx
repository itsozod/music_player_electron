const scopes = [
  'streaming',
  'user-read-email',
  'user-library-read',
  'playlist-read-private',
  'user-top-read'
]

const appUrl = `https://accounts.spotify.com/authorize?client_id=d14b3fd42bc24d9eb288ee6b17848d83&response_type=code&redirect_uri=http://localhost:3000/signin&scope=${scopes.join(
  '%20'
)}&show_dialog=true`

import { tokenInstance } from '@renderer/shared/utils'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import useSWRMutation from 'swr/mutation'
const client_id = 'd14b3fd42bc24d9eb288ee6b17848d83'
const client_secret = 'b726bbc353bb4e2bb96cbd2df017347d'

const getTokenInfo = async (url: string, { arg = {} }) => {
  const authString = btoa(`${client_id}:${client_secret}`) // Base64 encoding for browser
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${authString}`
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      ...arg,
      redirect_uri: 'http://localhost:3000/signin'
    })
  })

  if (!response.ok) {
    throw new Error('Failed to fetch token')
  }

  const data = await response.json()
  return data
}

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
