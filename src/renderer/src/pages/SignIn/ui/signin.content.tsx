import { Button } from '@renderer/components/ui/button'
import { Card, CardContent, CardFooter } from '@renderer/components/ui/card'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Wave from 'vanta/dist/vanta.halo.min.js'
import SpotifyLogo from '@renderer/shared/assets/spotify_web.png'

const Signin = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const vantaEffect = Wave({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      baseColor: '0xff20ec'
    })
    return () => {
      if (!vantaEffect) vantaEffect.destroy()
    }
  }, [])

  return (
    <main>
      <div ref={vantaRef} className="absolute w-full h-full"></div>
      <div className="relative flex items-center justify-center h-[100dvh]">
        <Card className="bg-transparent backdrop-blur-lg">
          <CardContent className="flex items-center justify-center">
            <img src={SpotifyLogo} className="w-[230px] max-w-full object-cover" alt="" />
          </CardContent>
          <CardFooter>
            <Button className=" bg-green-800 hover:bg-green-950 w-full">
              <Link to={'/'}>SignIn with Spotify</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

export default Signin
