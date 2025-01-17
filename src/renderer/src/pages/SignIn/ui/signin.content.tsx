import { Card, CardContent, CardFooter } from '@renderer/components/ui/card'
import SpotifyLogo from '@renderer/shared/assets/spotify_web.png'
import MusicPlayer from '@renderer/shared/assets/img.svg'
import SpotifyAuth from './SpotifyAuth'

const Signin = () => {
  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${MusicPlayer})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: '35% 35%'
        }}
      >
        <div className="w-full relative flex items-center justify-center h-[100dvh]">
          <Card className="bg-transparent backdrop-blur-md border-none">
            <CardContent className="flex items-center justify-center">
              <img
                width={200}
                height={200}
                src={SpotifyLogo}
                className="w-[200px] max-w-full object-cover"
                alt="Spotify Logo"
              />
            </CardContent>
            <CardFooter>
              <SpotifyAuth />
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

export default Signin
