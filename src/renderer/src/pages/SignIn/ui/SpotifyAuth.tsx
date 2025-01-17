import { Button } from '@renderer/components/ui/button'
import { Link } from 'react-router-dom'

const SpotifyAuth = () => {
  return (
    <Button className=" bg-green-800 hover:bg-green-950 w-full">
      <Link to={'/'}>Login with Spotify</Link>
    </Button>
  )
}

export default SpotifyAuth
